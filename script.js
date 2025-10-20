let universitiesData = {};

// 加载数据函数
async function loadUniversitiesData() {
  try {
    const response = await fetch('universitiesData.json');
    if (!response.ok) throw new Error(`数据加载失败: ${response.status}`);
    universitiesData = await response.json();
    console.log('大学专业数据加载完成');
    return true;
  } catch (error) {
    console.error('数据加载错误:', error);
    alert('无法加载大学专业数据，请刷新页面重试');
    return false;
  }
}

// 课程链接映射数据
let courseUrlMap = {};

// 加载课程链接映射数据
async function loadCourseUrlMap() {
    try {
        // 加载普通课程链接
        const response = await fetch('loughborough.csv');
        const csvText = await response.text();
        
        // 解析CSV数据
        const lines = csvText.split('\n').filter(line => line.trim());
        
        for (let i = 1; i < lines.length; i++) { // 跳过标题行
            const columns = lines[i].split(',');
            if (columns.length >= 4) {
                const majorName = columns[1].replace(/"/g, '').trim();
                const degree = columns[2].replace(/"/g, '').trim();
                const url = columns[3].replace(/"/g, '').trim();
                
                if (url && url !== 'null') {
                    // 创建多种格式的键以提高匹配成功率
                    
                    // 格式1: "专业名称 (学位)" - 与universitiesData.json格式一致
                    const fullMajorName1 = degree ? `${majorName} (${degree})` : majorName;
                    courseUrlMap[fullMajorName1] = url;
                    
                    // 格式2: "专业名称 (学位简写)" - 去除(Hons)等
                    if (degree) {
                        const simpleDegree = degree.replace('(Hons)', '').trim();
                        if (simpleDegree) {
                            const fullMajorName2 = `${majorName} (${simpleDegree})`;
                            courseUrlMap[fullMajorName2] = url;
                        }
                    }
                    
                    // 格式3: 仅专业名称
                    courseUrlMap[majorName] = url;
                    
                    // 格式4: 专业名称去除"with"等修饰词
                    const simplifiedMajor = majorName.replace(/with\s+[a-zA-Z\s]+/gi, '').trim();
                    if (simplifiedMajor && simplifiedMajor !== majorName) {
                        courseUrlMap[simplifiedMajor] = url;
                    }
                }
            }
        }
        
        console.log('课程链接映射数据加载完成:', Object.keys(courseUrlMap).length, '条记录');
    } catch (error) {
        console.error('加载课程链接映射数据失败:', error);
    }
}

// 在 universitiesData 定义之后添加URL生成函数
function generateMajorUrl(university, major) {
    // 规范化大学名称，确保大小写不敏感
    const normalizedUni = university.trim();
    
    // 如果是拉夫堡大学，优先使用CSV中的实际链接
    if (normalizedUni.toLowerCase().includes('loughborough')) {
        // 检查是否有精确匹配的实际链接
        if (courseUrlMap[major]) {
            console.log('使用精确匹配链接:', courseUrlMap[major]);
            return courseUrlMap[major];
        }
        
        // 尝试多种模糊匹配策略
        let matchedKey = null;
        
        // 策略1: 去除学位信息进行匹配
        const majorWithoutDegree = major.replace(/\([^)]*\)/g, '').trim();
        if (majorWithoutDegree !== major) {
            matchedKey = Object.keys(courseUrlMap).find(key => 
                key.includes(majorWithoutDegree) || majorWithoutDegree.includes(key)
            );
        }
        
        // 策略2: 如果策略1未找到，尝试包含匹配
        if (!matchedKey) {
            matchedKey = Object.keys(courseUrlMap).find(key => 
                key.includes(major) || major.includes(key)
            );
        }
        
        // 策略3: 如果策略2未找到，尝试部分匹配（按单词匹配）
        if (!matchedKey) {
            const majorWords = major.toLowerCase().split(/\s+/);
            matchedKey = Object.keys(courseUrlMap).find(key => {
                const keyWords = key.toLowerCase().split(/\s+/);
                return majorWords.some(word => keyWords.includes(word)) || 
                       keyWords.some(word => majorWords.includes(word));
            });
        }
        
        if (matchedKey) {
            console.log('使用模糊匹配链接:', courseUrlMap[matchedKey], '匹配键:', matchedKey);
            return courseUrlMap[matchedKey];
        }
        
        // 如果所有匹配策略都失败，记录警告
        console.warn('未找到匹配的链接，将使用生成的链接:', major);
    }
    
    const baseUrls = {
        "Loughborough University": "https://www.lboro.ac.uk/study/undergraduate/courses",
        "Loughborough university": "https://www.lboro.ac.uk/study/undergraduate/courses", // 小写版本备用
        "Loughborough": "https://www.lboro.ac.uk/study/undergraduate/courses" // 简写版本备用
        // 可以继续添加其他大学的URL映射
    };

    // 检查是否有匹配的大学URL
    const baseUrl = baseUrls[normalizedUni] || 
                   baseUrls[normalizedUni.charAt(0).toUpperCase() + normalizedUni.slice(1)];
    
    if (!baseUrl) return null;

    // 提取专业名称和学位
    const lastParen = major.lastIndexOf('(');
    let majorName = lastParen !== -1 ? major.substring(0, lastParen).trim() : major;
    const degree = lastParen !== -1 ? major.substring(lastParen + 1, major.length - 1) : '';

    // 生成URL友好的slug
    let urlSlug = majorName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\u00c0-\u017f-]/g, '') // 保留常见的国际字符
        .replace(/-+/g, '-') // 替换多个连字符为单个
        .replace(/^-|-$/g, ''); // 移除首尾连字符

    // 所有学位都添加到URL中
    if (degree) {
        const degreeSlug = degree.toLowerCase().replace(/\s+/g, '');
        urlSlug += `-${degreeSlug}`;
    }

    // 生成最终URL
    const finalUrl = `${baseUrl}/${urlSlug}/`;
    console.log('使用生成链接:', finalUrl); // 添加日志以便调试
    return finalUrl;
}

// DOM元素
const homeBtn = document.getElementById('homeBtn');
const historyBtn = document.getElementById('historyBtn');
const selectionPage = document.getElementById('selectionPage');
const historyPage = document.getElementById('historyPage');
const universityList = document.getElementById('universityList');
const majorSelection = document.getElementById('majorSelection');
const selectedUniversity = document.getElementById('selectedUniversity');
const randomBtn = document.getElementById('randomBtn');
const currentMajor = document.getElementById('currentMajor');
const decisionButtons = document.getElementById('decisionButtons');
const passBtn = document.getElementById('passBtn');
const rejectBtn = document.getElementById('rejectBtn');
const backToUniBtn = document.getElementById('backToUniBtn');
const historyList = document.getElementById('historyList');
const universityFilter = document.getElementById('universityFilter');
const viewAllBtn = document.getElementById('viewAllBtn');

// 新增：拒绝原因模态框
const rejectReasonModal = document.createElement('div');
rejectReasonModal.className = 'reject-reason-modal';
document.body.appendChild(rejectReasonModal);

// 状态变量
let isRolling = false;
let currentUni = null;
let majorSelectionHistory = JSON.parse(localStorage.getItem('majorSelectionHistory')) || {};
let currentRejectItem = null; // 存储当前正在处理的拒绝项

// 初始化
async function init() {
    try {
        // 先加载大学专业数据
        const dataLoaded = await loadUniversitiesData();
        if (!dataLoaded) return;
        
        // 加载课程链接映射数据
        await loadCourseUrlMap();
        
        // 数据加载成功后，再进行其他初始化
        // 初始化专业核查次数
        initMajorCheckCounts();

        // 渲染大学列表
        renderUniversityList();

        // 渲染历史记录
        renderHistory();

        // 设置大学筛选器
        setupUniversityFilter();

        // 设置拒绝原因模态框事件
        setupRejectReasonModal();

        // 设置快速筛选按钮
        setupQuickFilters();

        // 设置历史记录操作事件
        setupHistoryActions();
        
    } catch (error) {
        console.error('初始化错误:', error);
        alert('程序初始化失败，请刷新页面重试');
    }
}

function setupHistoryActions() {
    // 事件委托处理历史记录操作
    historyList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-reason-btn') || 
            e.target.closest('.edit-reason-btn')) {
            const btn = e.target.classList.contains('edit-reason-btn') ? e.target : e.target.closest('.edit-reason-btn');
            const uniName = btn.getAttribute('data-uni');
            const major = btn.getAttribute('data-major');
            editRejectReason(uniName, major);
        } else if (e.target.classList.contains('change-status-btn') || 
                   e.target.closest('.change-status-btn')) {
            const btn = e.target.classList.contains('change-status-btn') ? e.target : e.target.closest('.change-status-btn');
            const uniName = btn.getAttribute('data-uni');
            const major = btn.getAttribute('data-major');
            changeDecisionToPass(uniName, major);
        } else if (e.target.classList.contains('delete-history-btn') || 
                   e.target.closest('.delete-history-btn')) {
            const btn = e.target.classList.contains('delete-history-btn') ? e.target : e.target.closest('.delete-history-btn');
            const uniName = btn.getAttribute('data-uni');
            const major = btn.getAttribute('data-major');
            deleteHistoryRecord(uniName, major);
        }
    });
}

    // 事件监听（只需要大学筛选器的事件）
    universityFilter.addEventListener('change', renderHistory);
    homeBtn.addEventListener('click', () => switchPage('selection'));
    historyBtn.addEventListener('click', () => switchPage('history'));
    randomBtn.addEventListener('click', startRandomSelection);
    passBtn.addEventListener('click', () => handleDecision('pass'));
    rejectBtn.addEventListener('click', () => handleDecision('reject'));
    backToUniBtn.addEventListener('click', backToUniversitySelection);
    universityFilter.addEventListener('change', renderHistory);
    viewAllBtn.addEventListener('click', showAllMajors);

// 初始化专业核查次数
function initMajorCheckCounts() {
    Object.keys(universitiesData).forEach(uniName => {
        if (!majorSelectionHistory[uniName]) {
            majorSelectionHistory[uniName] = {};
        }
        universitiesData[uniName].forEach(major => {
            if (!majorSelectionHistory[uniName][major]) {
                majorSelectionHistory[uniName][major] = {
                    passCount: 0,
                    rejectCount: 0,
                    lastDecision: null,
                    lastTimestamp: null,
                    rejectReason: '' // 新增字段：存储不通过原因
                };
            }
        });
    });
    saveMajorSelectionHistory();
}

// 保存历史记录
function saveMajorSelectionHistory() {
    localStorage.setItem('majorSelectionHistory', JSON.stringify(majorSelectionHistory));
}

// 渲染大学列表
function renderUniversityList() {
    universityList.innerHTML = '';

    Object.keys(universitiesData).forEach(uniName => {
        const uniCard = document.createElement('div');
        uniCard.className = 'university-card';
        uniCard.innerHTML = `
            <div class="university-name">${uniName}</div>
            <div class="university-majors">${universitiesData[uniName].length} 个专业</div>
        `;

        uniCard.addEventListener('click', () => selectUniversity(uniName));
        universityList.appendChild(uniCard);
    });
}

// 选择大学
function selectUniversity(uniName) {
    currentUni = uniName;
    selectedUniversity.textContent = uniName;

    // 隐藏大学选择，显示专业选择
    document.querySelector('.university-selection').classList.add('hidden');
    majorSelection.classList.remove('hidden');

    // 重置显示
    currentMajor.innerHTML = '点击下方按钮开始';
    decisionButtons.classList.add('hidden');

    // 移除核查次数标签
    removeCheckCountBadge();
}

// 返回大学选择
function backToUniversitySelection() {
    currentUni = null;
    document.querySelector('.university-selection').classList.remove('hidden');
    majorSelection.classList.add('hidden');

    // 移除核查次数标签
    removeCheckCountBadge();
}

// 移除核查次数标签
function removeCheckCountBadge() {
    const countBadge = document.getElementById('checkCountBadge');
    if (countBadge) {
        countBadge.remove();
    }
}

// 切换页面
function switchPage(page) {
    if (page === 'selection') {
        selectionPage.classList.add('active');
        historyPage.classList.remove('active');
        homeBtn.classList.add('active');
        historyBtn.classList.remove('active');

        // 如果当前在大学选择页面，重置状态
        if (!currentUni) {
            backToUniversitySelection();
        }
    } else {
        selectionPage.classList.remove('active');
        historyPage.classList.add('active');
        homeBtn.classList.remove('active');
        historyBtn.classList.add('active');
        renderHistory();
    }
}

// 显示所有专业
function showAllMajors() {
    if (!currentUni) return;

    const majors = universitiesData[currentUni];

    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'majors-modal';
    modal.innerHTML = `
        <div class="majors-modal-content">
            <div class="majors-modal-header">
                <h3>${currentUni} - 所有专业</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="majors-stats">
                <span>共 <strong>${majors.length}</strong> 个专业</span>
                <span>点击专业可快速选择</span>
            </div>
            <div class="majors-search">
                <input type="text" class="search-input" placeholder="搜索专业名称...">
            </div>
            <div class="majors-list-container">
                <div class="majors-list" id="majorsList">
                    ${generateMajorsList(majors)}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // 显示模态框
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // 关闭模态框事件
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        closeMajorsModal(modal);
    });

    // 点击背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeMajorsModal(modal);
        }
    });

    // ESC键关闭
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeMajorsModal(modal);
            document.removeEventListener('keydown', escHandler);
        }
    });

    // 搜索功能
    const searchInput = modal.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
        filterMajors(e.target.value, majors, modal);
    });

    // 专业项点击事件
    const majorItems = modal.querySelectorAll('.major-item');
    majorItems.forEach(item => {
        setupMajorItemClick(item, majors, modal);
        item.addEventListener('click', () => {
            const majorNameElement = item.querySelector('.major-name');
            const majorName = majorNameElement.querySelector('.major-link') ?
                majorNameElement.querySelector('.major-link').textContent :
                majorNameElement.textContent.split('已核查')[0].trim();
            selectMajorFromList(majors.find(m => m.includes(majorName)), modal);
        });
    });
}

// 生成专业列表HTML
function generateMajorsList(majors) {
    if (majors.length === 0) {
        return '<div class="no-results">暂无专业数据</div>';
    }

    return majors.map(major => {
        // 分离专业名称和学位
        const lastParen = major.lastIndexOf('(');
        const majorName = lastParen !== -1 ? major.substring(0, lastParen).trim() : major;
        const degree = lastParen !== -1 ? major.substring(lastParen) : '';

        // 获取核查次数
        const checkCount = getTotalCheckCount(currentUni, major);
        const checkBadge = checkCount > 0 ? `<span class="major-check-badge">已核查${checkCount}次</span>` : '';

        // 生成专业链接
        const majorUrl = generateMajorUrl(currentUni, major);
        const majorLink = majorUrl ?
            `<a href="${majorUrl}" target="_blank" class="major-link">${majorName}</a>` :
            majorName;

        return `
            <div class="major-item">
                <div class="major-name">${majorLink}${checkBadge}</div>
                <div class="major-degree">${degree}</div>
            </div>
        `;
    }).join('');
}

// 筛选专业
function filterMajors(searchTerm, majors, modal) {
    const filteredMajors = majors.filter(major =>
        major.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const majorsList = modal.querySelector('#majorsList');
    majorsList.innerHTML = generateMajorsList(filteredMajors);

    // 重新绑定点击事件
    const majorItems = majorsList.querySelectorAll('.major-item');
    majorItems.forEach(item => {
        item.addEventListener('click', () => {
            const majorNameElement = item.querySelector('.major-name');
            const majorName = majorNameElement.querySelector('.major-link') ?
                majorNameElement.querySelector('.major-link').textContent :
                majorNameElement.textContent.split('已核查')[0].trim();
            selectMajorFromList(majors.find(m => m.includes(majorName)), modal);
        });
    });
}

// 从列表中选择专业
function selectMajorFromList(selectedMajor, modal) {
    // 直接使用传入的 selectedMajor，确保准确性
    const majorUrl = generateMajorUrl(currentUni, selectedMajor);
    if (majorUrl) {
        currentMajor.innerHTML = `<a href="${majorUrl}" target="_blank" class="major-link">${selectedMajor}</a>`;
    } else {
        currentMajor.textContent = selectedMajor;
    }

    // 显示决策按钮
    decisionButtons.classList.remove('hidden');

    closeMajorsModal(modal);

    // 更新核查次数显示
    updateCheckCountDisplay(selectedMajor);

    // 添加选择动画
    currentMajor.classList.add('scrolling');
    setTimeout(() => {
        currentMajor.classList.remove('scrolling');
    }, 500);
}

// 修改专业项点击事件处理
function setupMajorItemClick(item, majors, modal) {
    item.addEventListener('click', () => {
        // 直接从 data 属性获取完整专业名称
        const majorName = item.getAttribute('data-major');
        if (majorName) {
            selectMajorFromList(majorName, modal);
            return;
        }

        // 备用方案：从显示文本中提取
        const majorNameElement = item.querySelector('.major-name');
        let fullMajorName = '';

        if (majorNameElement.querySelector('.major-link')) {
            // 如果有链接，获取链接文本
            fullMajorName = majorNameElement.querySelector('.major-link').textContent;
        } else {
            // 如果没有链接，获取整个文本并去除核查次数部分
            const fullText = majorNameElement.textContent;
            fullMajorName = fullText.split('已核查')[0].trim();
        }

        // 在专业列表中精确匹配
        const exactMajor = majors.find(m => m === fullMajorName);
        if (exactMajor) {
            selectMajorFromList(exactMajor, modal);
        } else {
            // 如果精确匹配失败，使用包含匹配
            const similarMajor = majors.find(m => m.includes(fullMajorName));
            if (similarMajor) {
                selectMajorFromList(similarMajor, modal);
            } else {
                console.error('未找到匹配的专业:', fullMajorName);
                alert('选择专业时出现错误，请重试');
            }
        }
    });
}

// 更新生成专业列表HTML的函数，添加data属性
function generateMajorsList(majors) {
    if (majors.length === 0) {
        return '<div class="no-results">暂无专业数据</div>';
    }

    return majors.map(major => {
        // 分离专业名称和学位
        const lastParen = major.lastIndexOf('(');
        const majorName = lastParen !== -1 ? major.substring(0, lastParen).trim() : major;
        const degree = lastParen !== -1 ? major.substring(lastParen) : '';

        // 获取核查次数
        const checkCount = getTotalCheckCount(currentUni, major);
        const checkBadge = checkCount > 0 ? `<span class="major-check-badge">已核查${checkCount}次</span>` : '';

        // 生成专业链接
        const majorUrl = generateMajorUrl(currentUni, major);
        const majorLink = majorUrl ?
            `<a href="${majorUrl}" target="_blank" class="major-link">${majorName}</a>` :
            majorName;

        return `
            <div class="major-item" data-major="${major.replace(/"/g, '&quot;')}">
                <div class="major-name">${majorLink}${checkBadge}</div>
                <div class="major-degree">${degree}</div>
            </div>
        `;
    }).join('');
}

// 更新搜索功能中的事件绑定
function filterMajors(searchTerm, majors, modal) {
    const filteredMajors = majors.filter(major =>
        major.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const majorsList = modal.querySelector('#majorsList');
    majorsList.innerHTML = generateMajorsList(filteredMajors);

    // 重新绑定点击事件
    const majorItems = majorsList.querySelectorAll('.major-item');
    majorItems.forEach(item => {
        setupMajorItemClick(item, filteredMajors, modal);
    });
}

// 关闭专业模态框
function closeMajorsModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }, 300);
}

// 开始随机选择
function startRandomSelection() {
    if (isRolling || !currentUni) return;

    isRolling = true;
    decisionButtons.classList.add('hidden');

    // 移除核查次数标签
    removeCheckCountBadge();

    // 清空当前专业显示
    currentMajor.innerHTML = '';

    const majors = universitiesData[currentUni];

    // 滚动动画
    let rollCount = 0;
    const maxRolls = 20;
    const rollInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * majors.length);
        const randomMajor = majors[randomIndex];
        const majorUrl = generateMajorUrl(currentUni, randomMajor);

        if (majorUrl) {
            currentMajor.innerHTML = `<a href="${majorUrl}" target="_blank" class="major-link">${randomMajor}</a>`;
        } else {
            currentMajor.textContent = randomMajor;
        }
        currentMajor.classList.add('scrolling');

        setTimeout(() => {
            currentMajor.classList.remove('scrolling');
        }, 300);

        rollCount++;

        if (rollCount >= maxRolls) {
            clearInterval(rollInterval);

            // 最终结果
            const finalIndex = Math.floor(Math.random() * majors.length);
            const finalMajor = majors[finalIndex];
            const finalMajorUrl = generateMajorUrl(currentUni, finalMajor);

            if (finalMajorUrl) {
                currentMajor.innerHTML = `<a href="${finalMajorUrl}" target="_blank" class="major-link">${finalMajor}</a>`;
            } else {
                currentMajor.textContent = finalMajor;
            }

            // 更新核查次数显示
            updateCheckCountDisplay(finalMajor);

            // 显示决策按钮
            setTimeout(() => {
                decisionButtons.classList.remove('hidden');
                isRolling = false;
            }, 500);
        }
    }, 100);
}

// 处理决策
function handleDecision(decision) {
    if (!currentUni) return;

    const major = currentMajor.textContent || currentMajor.querySelector('.major-link')?.textContent;
    const timestamp = new Date().toLocaleString();

    // 更新核查次数
    if (!majorSelectionHistory[currentUni]) {
        majorSelectionHistory[currentUni] = {};
    }
    if (!majorSelectionHistory[currentUni][major]) {
        majorSelectionHistory[currentUni][major] = {
            passCount: 0,
            rejectCount: 0,
            lastDecision: null,
            lastTimestamp: null,
            rejectReason: ''
        };
    }

    // 增加对应的计数
    if (decision === 'pass') {
        majorSelectionHistory[currentUni][major].passCount++;
        majorSelectionHistory[currentUni][major].lastDecision = 'pass';
        majorSelectionHistory[currentUni][major].lastTimestamp = timestamp;
        majorSelectionHistory[currentUni][major].rejectReason = ''; // 清空原因（通过时不需要）
    } else {
        // 不通过：弹出输入框，暂不保存
        showRejectReasonModal(currentUni, major);
        return;
    }

    // 保存到本地存储
    saveMajorSelectionHistory();

    // 更新显示核查次数
    updateCheckCountDisplay(major);

    // 隐藏决策按钮
    decisionButtons.classList.add('hidden');

    // 如果当前在历史页面，更新显示
    if (historyPage.classList.contains('active')) {
        renderHistory();
    }
}

// 显示拒绝原因输入框
function showRejectReasonModal(uniName, major) {
    currentRejectItem = { uniName, major };

    const existingReason = majorSelectionHistory[uniName][major]?.rejectReason || '';

    const modalContent = `
        <div class="reject-reason-content">
            <div class="reject-reason-header">
                <h3 class="reject-reason-title">不通过原因</h3>
                <button class="close-reject-reason-btn">&times;</button>
            </div>
            <form class="reject-reason-form" id="rejectReasonForm">
                <label for="rejectReasonInput" class="reject-reason-label">请输入不通过的原因或修改建议：</label>
                <textarea id="rejectReasonInput" class="reject-reason-input" placeholder="例如：课程设置不符合预期，或者希望修改为...">${existingReason}</textarea>
                <div class="reject-reason-actions">
                    <button type="button" class="reject-reason-btn cancel" id="cancelRejectReason">取消</button>
                    <button type="submit" class="reject-reason-btn save" id="saveRejectReason">保存</button>
                </div>
            </form>
        </div>
    `;

    rejectReasonModal.innerHTML = modalContent;
    rejectReasonModal.classList.add('active');

    // 绑定表单提交事件
    const form = document.getElementById('rejectReasonForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        saveRejectReason();
    });

    // 绑定取消按钮事件
    document.getElementById('cancelRejectReason').addEventListener('click', hideRejectReasonModal);
}

// 保存拒绝原因
// 保存拒绝原因
function saveRejectReason() {
    if (!currentRejectItem) return;

    const { uniName, major } = currentRejectItem;
    const reasonInput = document.getElementById('rejectReasonInput');
    
    // 检查DOM元素是否存在
    if (!reasonInput) {
        console.error('拒绝原因输入框元素未找到');
        return;
    }
    
    const rejectReason = reasonInput.value.trim();
    
    // 确保历史记录对象结构存在
    if (!majorSelectionHistory[uniName]) {
        majorSelectionHistory[uniName] = {};
    }
    if (!majorSelectionHistory[uniName][major]) {
        majorSelectionHistory[uniName][major] = {
            passCount: 0,
            rejectCount: 0
        };
    }

    // 更新历史记录数据 - 增加拒绝次数
    if (!majorSelectionHistory[uniName][major].rejectCount) {
        majorSelectionHistory[uniName][major].rejectCount = 0;
    }
    majorSelectionHistory[uniName][major].rejectCount++;
    majorSelectionHistory[uniName][major].rejectReason = rejectReason;
    majorSelectionHistory[uniName][major].lastDecision = 'reject';
    majorSelectionHistory[uniName][major].lastTimestamp = new Date().toLocaleString();

    // 保存到本地存储
    saveMajorSelectionHistory();

    // 隐藏模态框
    hideRejectReasonModal();

    // 更新显示核查次数
    updateCheckCountDisplay(major);

    // 隐藏决策按钮
    decisionButtons.classList.add('hidden');

    // 如果当前在历史页面，更新显示
    if (historyPage.classList.contains('active')) {
        renderHistory();
    }

    // 重置当前项
    currentRejectItem = null;
}

// 隐藏拒绝原因输入框
function hideRejectReasonModal() {
    rejectReasonModal.classList.remove('active');
    setTimeout(() => {
        rejectReasonModal.innerHTML = '';
    }, 300);
}

// 设置拒绝原因模态框事件
function setupRejectReasonModal() {
    // 动态绑定，因为内容是动态生成的
    rejectReasonModal.addEventListener('click', (e) => {
        if (e.target === rejectReasonModal) {
            hideRejectReasonModal();
        }
        if (e.target.classList.contains('close-reject-reason-btn')) {
            hideRejectReasonModal();
        }
    });

    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            hideRejectReasonModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// 更新显示核查次数
function updateCheckCountDisplay(major) {
    const checkCount = getTotalCheckCount(currentUni, major);

    // 移除旧的标签
    removeCheckCountBadge();

    if (checkCount > 0) {
        let countBadge = document.createElement('div');
        countBadge.id = 'checkCountBadge';
        countBadge.className = 'check-count-badge';
        countBadge.textContent = `已核查 ${checkCount} 次`;

        // 添加到专业显示区域
        const majorDisplay = document.querySelector('.major-display');
        majorDisplay.appendChild(countBadge);

        // 显示动画
        setTimeout(() => {
            countBadge.classList.add('show');
        }, 100);
    }
}

// 获取总核查次数
function getTotalCheckCount(uniName, major) {
    if (majorSelectionHistory[uniName] && majorSelectionHistory[uniName][major]) {
        const data = majorSelectionHistory[uniName][major];
        return data.passCount + data.rejectCount;
    }
    return 0;
}

// 设置大学筛选器
function setupUniversityFilter() {
    universityFilter.innerHTML = '<option value="all">所有大学</option>';

    Object.keys(universitiesData).forEach(uniName => {
        const option = document.createElement('option');
        option.value = uniName;
        option.textContent = uniName;
        universityFilter.appendChild(option);
    });
}

// 添加快速筛选功能
function setupQuickFilters() {
    const quickFilterBtns = document.querySelectorAll('.quick-filter-btn');
    
    quickFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除其他按钮的active类
            quickFilterBtns.forEach(b => b.classList.remove('active'));
            // 添加当前按钮的active类
            btn.classList.add('active');
            
            // 重新渲染历史记录
            renderHistory();
        });
    });
}

// 获取当前筛选状态
function getCurrentDecisionFilter() {
    const activeBtn = document.querySelector('.quick-filter-btn.active');
    return activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
}

// 修改渲染历史记录函数
// 修改渲染历史记录函数
function renderHistory() {
    const universityFilterValue = universityFilter.value;
    const decisionFilterValue = getCurrentDecisionFilter();
    
    let allHistory = [];
    let totalEntries = 0;
    let totalPass = 0;
    let totalReject = 0;
    let totalModified = 0; // 新增：统计已修改数量

    // 收集所有历史记录
    Object.keys(majorSelectionHistory).forEach(uniName => {
        if (universityFilterValue === 'all' || uniName === universityFilterValue) {
            Object.keys(majorSelectionHistory[uniName]).forEach(major => {
                const data = majorSelectionHistory[uniName][major];
                
                if (data.lastDecision) {
                    const isModified = data.isModified || false;
                    
                    // 根据筛选条件判断是否包含
                    let shouldInclude = false;
                    
                    if (decisionFilterValue === 'all') {
                        shouldInclude = true;
                    } else if (decisionFilterValue === 'pass') {
                        shouldInclude = data.lastDecision === 'pass';
                    } else if (decisionFilterValue === 'reject') {
                        shouldInclude = data.lastDecision === 'reject';
                    } else if (decisionFilterValue === 'modified') {
                        shouldInclude = isModified; // 已修改筛选
                    }
                    
                    if (shouldInclude) {
                        allHistory.push({
                            university: uniName,
                            major: major,
                            decision: data.lastDecision,
                            timestamp: data.lastTimestamp,
                            passCount: data.passCount,
                            rejectCount: data.rejectCount,
                            totalCount: data.passCount + data.rejectCount,
                            rejectReason: data.rejectReason || '',
                            isModified: isModified
                        });
                        
                        totalEntries += data.passCount + data.rejectCount;
                        totalPass += data.passCount;
                        totalReject += data.rejectCount;
                        if (isModified) totalModified++; // 统计已修改数量
                    }
                }
            });
        }
    });

    // 按时间排序
    allHistory.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    // 更新历史记录标题，显示统计信息
    const historyTitle = document.querySelector('.history-area h2');
    if (historyTitle) {
        let statsText = '';
        if (decisionFilterValue === 'all') {
            statsText = `(共 ${allHistory.length} 条记录，通过 ${totalPass} 次，不通过 ${totalReject} 次，已修改 ${totalModified} 条)`;
        } else if (decisionFilterValue === 'pass') {
            statsText = `(通过记录 ${allHistory.length} 条)`;
        } else if (decisionFilterValue === 'reject') {
            statsText = `(不通过记录 ${allHistory.length} 条)`;
        } else if (decisionFilterValue === 'modified') {
            statsText = `(已修改记录 ${allHistory.length} 条)`; // 新增
        }
        historyTitle.innerHTML = `选择历史 <span class="history-stats">${statsText}</span>`;
    }

    // 渲染历史记录列表
    if (allHistory.length === 0) {
        let noRecordsMessage = '暂无历史记录';
        if (universityFilterValue !== 'all' || decisionFilterValue !== 'all') {
            if (decisionFilterValue === 'modified') {
                noRecordsMessage = '暂无已修改的记录';
            } else {
                noRecordsMessage = '没有找到匹配的记录';
            }
        }
        historyList.innerHTML = `<p class="no-history">${noRecordsMessage}</p>`;
        return;
    }

    historyList.innerHTML = '';

    allHistory.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';

        const statusClass = item.decision === 'pass' ? 'status-pass' : 'status-reject';
        const statusText = item.decision === 'pass' ? '通过' : '不通过';

        // 生成专业链接
        const majorUrl = generateMajorUrl(item.university, item.major);
        const majorDisplay = majorUrl ? 
            `<a href="${majorUrl}" target="_blank" class="major-link">${item.major}</a>` : 
            item.major;

        // 构建历史记录条目HTML
        let html = `
            <div class="history-content">
                <div class="history-university">${item.university}</div>
                <div class="history-major">${majorDisplay}
                    ${item.isModified ? '<span class="modified-badge">已修改</span>' : ''}
                    <span class="history-check-count">核查${item.totalCount}次</span>
                </div>
        `;

        // 如果是"不通过"，并且有原因，则显示原因
        if (item.decision === 'reject' && item.rejectReason) {
            html += `<div class="history-reject-reason">${item.rejectReason}</div>`;
        }

        html += `
            </div>
            <div class="history-info">
                <span class="history-status ${statusClass}">${statusText}</span>
                <div class="history-time">${item.timestamp}</div>
                <div class="history-counts">
                    <small>通过: ${item.passCount}次</small>
                    <small>不通过: ${item.rejectCount}次</small>
                </div>
                <div class="history-actions">
                    <button class="delete-history-btn" data-uni="${item.university}" data-major="${item.major}" title="删除此记录">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </svg>
                    </button>
                    ${item.decision === 'reject' ? 
                        `<button class="edit-reason-btn" data-uni="${item.university}" data-major="${item.major}">编辑原因</button>
                         <button class="change-status-btn" data-uni="${item.university}" data-major="${item.major}">改为通过</button>` : 
                        `<button class="edit-reason-btn" data-uni="${item.university}" data-major="${item.major}">编辑原因</button>`
                    }
                </div>
            </div>
        `;

        historyItem.innerHTML = html;
        historyList.appendChild(historyItem);
    });

    // 绑定编辑按钮事件
    bindHistoryActionEvents();
}

// 绑定历史记录操作事件
function bindHistoryActionEvents() {
    // 编辑原因按钮
    const editReasonBtns = document.querySelectorAll('.edit-reason-btn');
    editReasonBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const uniName = btn.getAttribute('data-uni');
            const major = btn.getAttribute('data-major');
            editRejectReason(uniName, major);
        });
    });

    // 改为通过按钮
    const changeStatusBtns = document.querySelectorAll('.change-status-btn');
    changeStatusBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const uniName = btn.getAttribute('data-uni');
            const major = btn.getAttribute('data-major');
            changeDecisionToPass(uniName, major);
        });
    });

    // 删除按钮
    const deleteBtns = document.querySelectorAll('.delete-history-btn');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const uniName = btn.getAttribute('data-uni');
            const major = btn.getAttribute('data-major');
            deleteHistoryRecord(uniName, major);
        });
    });
}

// 修改决策为通过（保留拒绝原因）
function changeDecisionToPass(uniName, major) {
    if (!majorSelectionHistory[uniName] || !majorSelectionHistory[uniName][major]) {
        return;
    }

    const record = majorSelectionHistory[uniName][major];

    // 保存当前的拒绝原因
    const currentRejectReason = record.rejectReason || '';

    // 更新记录（保留拒绝原因）
    record.passCount++;
    record.rejectCount = Math.max(0, record.rejectCount - 1);
    record.lastDecision = 'pass';
    record.lastTimestamp = new Date().toLocaleString();
    record.isModified = true; // 添加修改标识
    // 重要：保留拒绝原因，不清空
    record.rejectReason = currentRejectReason;

    // 保存到本地存储
    saveMajorSelectionHistory();

    // 重新渲染历史记录
    renderHistory();

    // 显示成功提示
    showNotification(`已将 ${major} 的状态改为通过（保留原因）`);
}

// 编辑拒绝原因
function editRejectReason(uniName, major) {
    if (!majorSelectionHistory[uniName] || !majorSelectionHistory[uniName][major]) {
        return;
    }

    const record = majorSelectionHistory[uniName][major];
    const currentReason = record.rejectReason || '';

    // 使用现有的拒绝原因模态框
    const modalContent = `
        <div class="reject-reason-content">
            <div class="reject-reason-header">
                <h3 class="reject-reason-title">编辑不通过原因</h3>
                <button class="close-reject-reason-btn">&times;</button>
            </div>
            <form class="reject-reason-form" id="editRejectReasonForm">
                <label for="editRejectReasonInput" class="reject-reason-label">${uniName} - ${major}</label>
                <textarea id="editRejectReasonInput" class="reject-reason-input" placeholder="请输入不通过的原因或修改建议...">${currentReason}</textarea>
                <div class="reject-reason-actions">
                    <button type="button" class="reject-reason-btn cancel" id="cancelEditRejectReason">取消</button>
                    <button type="submit" class="reject-reason-btn save" id="saveEditRejectReason">保存</button>
                </div>
            </form>
        </div>
    `;

    rejectReasonModal.innerHTML = modalContent;
    rejectReasonModal.classList.add('active');

    // 绑定表单提交事件
    const form = document.getElementById('editRejectReasonForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        saveEditedRejectReason(uniName, major);
    });

    // 绑定取消按钮事件
    document.getElementById('cancelEditRejectReason').addEventListener('click', hideRejectReasonModal);
}

// 保存编辑后的拒绝原因
function saveEditedRejectReason(uniName, major) {
    const reasonInput = document.getElementById('editRejectReasonInput');
    const newReason = reasonInput.value.trim();

    if (!majorSelectionHistory[uniName] || !majorSelectionHistory[uniName][major]) {
        return;
    }

    // 更新拒绝原因
    majorSelectionHistory[uniName][major].rejectReason = newReason;
    majorSelectionHistory[uniName][major].isModified = true; // 添加修改标识
    majorSelectionHistory[uniName][major].lastTimestamp = new Date().toLocaleString();

    // 保存到本地存储
    saveMajorSelectionHistory();

    // 隐藏模态框
    hideRejectReasonModal();

    // 重新渲染历史记录
    renderHistory();

    // 显示成功提示
    showNotification(`已更新 ${major} 的不通过原因`);
}

// 显示通知
function showNotification(message) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // 添加到页面
    document.body.appendChild(notification);

    // 显示动画
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // 自动隐藏
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 删除单条历史记录
function deleteHistoryRecord(uniName, major) {
    if (!majorSelectionHistory[uniName] || !majorSelectionHistory[uniName][major]) {
        return;
    }

    // 确认对话框
    if (confirm(`确定要删除 ${uniName} - ${major} 的历史记录吗？\n\n通过: ${majorSelectionHistory[uniName][major].passCount}次\n不通过: ${majorSelectionHistory[uniName][major].rejectCount}次`)) {
        // 重置该专业的记录（不清除数据结构，只重置计数和时间戳）
        majorSelectionHistory[uniName][major] = {
            passCount: 0,
            rejectCount: 0,
            lastDecision: null,
            lastTimestamp: null,
            rejectReason: '',
            isModified: false
        };
        
        // 保存到本地存储
        saveMajorSelectionHistory();
        
        // 重新渲染历史记录
        renderHistory();
        
        // 显示成功提示
        showNotification(`已删除 ${major} 的历史记录`);
    }
}

// 完全删除专业记录（从数据结构中移除）
function completelyDeleteRecord(uniName, major) {
    if (!majorSelectionHistory[uniName] || !majorSelectionHistory[uniName][major]) {
        return;
    }

    if (confirm(`确定要完全删除 ${uniName} - ${major} 的记录吗？\n\n此操作不可撤销！`)) {
        // 从数据结构中删除该专业
        delete majorSelectionHistory[uniName][major];
        
        // 如果该大学下没有其他专业记录，可以删除大学条目（可选）
        if (Object.keys(majorSelectionHistory[uniName]).length === 0) {
            delete majorSelectionHistory[uniName];
        }
        
        // 保存到本地存储
        saveMajorSelectionHistory();
        
        // 重新渲染历史记录
        renderHistory();
        
        // 显示成功提示
        showNotification(`已完全删除 ${major} 的记录`);
    }
}

// 清空历史记录
function clearHistory() {
    if (confirm('确定要清空所有历史记录吗？')) {
        majorSelectionHistory = {};
        Object.keys(universitiesData).forEach(uniName => {
            majorSelectionHistory[uniName] = {};
            universitiesData[uniName].forEach(major => {
                majorSelectionHistory[uniName][major] = {
                    passCount: 0,
                    rejectCount: 0,
                    lastDecision: null,
                    lastTimestamp: null,
                    rejectReason: ''
                };
            });
        });
        saveMajorSelectionHistory();
        renderHistory();
    }
}

// 简化版导入历史记录功能
function importHistory() {
    // 创建文件输入元素
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.csv,.json';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            try {
                const fileExtension = file.name.split('.').pop().toLowerCase();
                let importedData;

                if (fileExtension === 'csv') {
                    importedData = parseCSVData(e.target.result);
                } else if (fileExtension === 'json') {
                    importedData = JSON.parse(e.target.result);
                } else {
                    alert('请选择CSV或JSON格式的文件！');
                    return;
                }

                // 统计信息
                const stats = calculateImportStats(importedData);

                // 简单确认对话框
                if (confirm(`检测到 ${stats.universityCount} 个大学，${stats.majorCount} 个专业记录\n通过: ${stats.totalPass} 次，不通过: ${stats.totalReject} 次\n\n是否确认导入？`)) {
                    // 合并数据
                    mergeImportedData(importedData);
                    alert('导入成功！');
                    renderHistory();
                }

            } catch (error) {
                console.error('导入错误:', error);
                alert('导入失败：文件格式不正确！');
            }
        };

        reader.onerror = function () {
            alert('文件读取失败！');
        };

        reader.readAsText(file, 'UTF-8');
    });

    document.body.appendChild(fileInput);
    fileInput.click();
}

// 解析CSV数据（简化版）
function parseCSVData(csvContent) {
    const lines = csvContent.split('\n').filter(line => line.trim() !== '');
    if (lines.length < 2) return {};

    const importedData = {};

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        if (values.length < 3) continue;

        const university = values[0].replace(/^"|"$/g, '').trim();
        const major = values[1].replace(/^"|"$/g, '').trim();
        const passCount = parseInt(values[2]) || 0;
        const rejectCount = parseInt(values[3]) || 0;

        if (!university || !major) continue;

        if (!importedData[university]) {
            importedData[university] = {};
        }

        importedData[university][major] = {
            passCount: passCount,
            rejectCount: rejectCount,
            lastDecision: values[5] && values[5] !== 'null' ? values[5].replace(/^"|"$/g, '') : null,
            lastTimestamp: values[6] && values[6] !== 'null' ? values[6].replace(/^"|"$/g, '') : null,
            rejectReason: values[7] && values[7] !== 'null' ? values[7].replace(/^"|"$/g, '') : ''
        };
    }

    return importedData;
}

// 统计导入数据
function calculateImportStats(data) {
    let universityCount = 0;
    let majorCount = 0;
    let totalPass = 0;
    let totalReject = 0;

    Object.keys(data).forEach(uniName => {
        universityCount++;
        const majors = data[uniName];

        Object.keys(majors).forEach(majorName => {
            majorCount++;
            const record = majors[majorName];
            totalPass += record.passCount || 0;
            totalReject += record.rejectCount || 0;
        });
    });

    return { universityCount, majorCount, totalPass, totalReject };
}

// 合并导入的数据
function mergeImportedData(importedData) {
    for (const uniName in importedData) {
        if (!majorSelectionHistory[uniName]) {
            majorSelectionHistory[uniName] = {};
        }

        for (const majorName in importedData[uniName]) {
            const importedRecord = importedData[uniName][majorName];

            // 直接使用导入的数据（覆盖原有数据）
            majorSelectionHistory[uniName][majorName] = importedRecord;
        }
    }

    saveMajorSelectionHistory();
}

// 只导出有历史记录的数据
function exportHistory() {
    // 过滤出有记录的数据
    const filteredHistory = {};

    Object.keys(majorSelectionHistory).forEach(uniName => {
        Object.keys(majorSelectionHistory[uniName]).forEach(majorName => {
            const record = majorSelectionHistory[uniName][majorName];
            const totalCount = (record.passCount || 0) + (record.rejectCount || 0);

            // 只导出至少核查过一次的专业
            if (totalCount > 0) {
                if (!filteredHistory[uniName]) {
                    filteredHistory[uniName] = {};
                }
                filteredHistory[uniName][majorName] = record;
            }
        });
    });

    const historyData = {
        exportTime: new Date().toLocaleString('zh-CN'),
        version: '1.0',
        totalRecords: Object.keys(filteredHistory).length,
        data: filteredHistory
    };

    const dataStr = JSON.stringify(historyData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `专业核查历史记录_${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    URL.revokeObjectURL(link.href);
}

// 只导出有记录的CSV
function exportHistoryCSV() {
    let csvContent = '大学,专业,通过次数,不通过次数,总核查次数,最后决定,最后时间,拒绝原因\n';
    let recordCount = 0;

    Object.keys(majorSelectionHistory).forEach(uniName => {
        Object.keys(majorSelectionHistory[uniName]).forEach(majorName => {
            const record = majorSelectionHistory[uniName][majorName];
            const totalCount = (record.passCount || 0) + (record.rejectCount || 0);

            // 只导出有记录的数据
            if (totalCount > 0) {
                recordCount++;

                const escapeCSV = (str) => {
                    if (str === null || str === undefined) return '';
                    return `"${String(str).replace(/"/g, '""')}"`;
                };

                csvContent += [
                    escapeCSV(uniName),
                    escapeCSV(majorName),
                    record.passCount || 0,
                    record.rejectCount || 0,
                    totalCount,
                    escapeCSV(record.lastDecision),
                    escapeCSV(record.lastTimestamp),
                    escapeCSV(record.rejectReason)
                ].join(',') + '\n';
            }
        });
    });

    if (recordCount === 0) {
        alert('没有找到任何历史记录！');
        return;
    }

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `专业核查历史记录_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
}

// 初始化应用
document.addEventListener('DOMContentLoaded', init);