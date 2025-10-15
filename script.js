const universitiesData = {
    "Loughborough": [
        "Accounting and Finance (BSc)", "Aeronautical Engineering (BEng)", "Aeronautical Engineering (MEng)", "Aeronautical Engineering with a Foundation Year (BEng)", "Architectural Engineering (MEng)", "Architectural Engineering (BEng)", "Architecture (BArch)", "Automotive Engineering (BEng)", "Automotive Engineering (MEng)", "Automotive Engineering with a Foundation Year (BSc)", "Automotive Materials (MEng)", "Automotive Materials (BEng)", "Biological Sciences (BSc)", "Biological Sciences with a Foundation Year (BSc)", "Biomaterials Engineering (BEng)", "Biomaterials Engineering (MEng)", "Biomedical Engineering (BEng)", "Biomedical Engineering (MEng)", "Biomedical Engineering with a Foundation Year (BSc)", "Business Analytics (BSc)", "Business with a Foundation Year for Elite Athletes (BSc)", "Chemical Engineering (MEng)", "Chemical Engineering (BEng)", "Chemical Engineering with a Foundation Year (BEng)", "Chemistry (BSc)", "Chemistry (MChem)", "Chemistry with a Foundation Year (BSc)", "Chemistry with Computing (BSc)", "Chemistry with Computing (MChem)", "Civil Engineering (BEng)", "Civil Engineering (MEng)", "Civil Engineering and Architectural Engineering with a Foundation Year (BSc)", "Commercial Management and Quantity Surveying (BSc)", "Computer and Electronic Engineering (MEng)", "Computer and Electronic Engineering (BEng)", "Computer Science (BSc)", "Computer Science (MSci)", "Computer Science and Artificial Intelligence (BSc)", "Computer Science and Artificial Intelligence (MSci)", "Computer Science and Cybersecurity (MSci)", "Computer Science and Cybersecurity (BSc)", "Computer Science and Mathematics (BSc)", "Computer Science and Mathematics (MSci)", "Computer Science with a Foundation Year (BSc)", "Computing and Management (BSc)", "Computing and Management (MSci)", "Construction Engineering Management (BSc)", "Criminology (BSc)", "Criminology and Sociology (BSc)", "Design (BA)", "Economics (BSc)", "Economics and Finance (BSc)", "Economics and Management (BSc)", "Economics with a Foundation Year for Elite Athletes (BSc)", "Electrical and Electronic Engineering (BEng)", "Electrical and Electronic Engineering (MEng)", "Electronic and Electrical Engineering with a Foundation Year (BSc)", "Energy Engineering (BEng)", "Energy Engineering (MEng)", "Engineering Management (BEng)", "Engineering Management with a Foundation Year (BEng)", "Engineering Physics (BSc)", "Engineering Physics (MPhys)", "English (BA)", "English and Sport Science (BA)", "English Literature (BA)", "English with Business Studies (BA)", "English with Creative Writing (BA)", "Fashion Design and Technology (BA)", "Finance (BSc)", "Financial Mathematics (BSc)", "Fine Arts (BA)", "Geography (BSc)", "Geography (BA)", "Geography and Management (BSc)", "Geography and Sport Science (BSc)", "Geography with a Foundation Year (BSc)", "Geography with Economics (BSc)", "Graphic Design (BA)", "History (BA)", "History and International Relations (BA)", "History and Politics (BA)", "Human Biology (BSc)", "Human Biology with a Foundation Year (BSc)", "Industrial Design (BA)", "Information Technology Management for Business (BSc)", "Information Technology Management for Business (MSci)", "International Business (BSc)", "International Relations (BSc)", "Law (LLB)", "Management (BSc)", "Marketing (BSc)", "Materials Engineering with Foundation Year (BEng)", "Materials Science and Engineering (BEng)", "Materials Science and Engineering (MEng)", "Mathematics (BSc)", "Mathematics (MMath)", "Mathematics and Accounting and Financial Management (BSc)", "Mathematics and Physics (MPhys)", "Mathematics and Physics (BSc)", "Mathematics and Sport Science (BSc)", "Mathematics with a Foundation Year (BSc)", "Mathematics with Economics (BSc)", "Mathematics with Statistics (BSc)", "Mechanical Engineering (MEng)", "Mechanical Engineering (BEng)", "Mechanical Engineering with a Foundation Year (BSc)", "Media and Communication (BSc)", "Medicinal and Pharmaceutical Chemistry (BSc)", "Medicinal and Pharmaceutical Chemistry (MChem)", "Natural Sciences (BSc)", "Natural Sciences (MSci)", "Natural Sciences with a Foundation Year (BSc)", "Physics (BSc)", "Physics (MPhys)", "Physics with a Foundation Year (BSc)", "Physics with Computing (MPhys)", "Physics with Computing (BSc)", "Physics with Theoretical Physics (MPhys)", "Physics with Theoretical Physics (BSc)", "Politics (BA)", "Politics and International Relations (BA)", "Politics, Philosophy and Economics (BA)", "Product Design and Technology (BSc)", "Product Design and Technology with a Foundation Year (BSc)", "Product Design Engineering (MEng)", "Product Design Engineering (BEng)", "Product Design Engineering with a Foundation Year (BEng)", "Psychology (BSc)", "Psychology of Sport and Exercise (BSc)", "Psychology with a Foundation Year for Elite Athletes (BSc)", "Psychology with Criminology (BSc)", "Robotics, Mechatronics and Control Engineering (MEng)", "Robotics, Mechatronics and Control Engineering (BEng)", "Social Sciences and Humanities with a Foundation Year (BSc)", "Sociology (BSc)", "Sport and Exercise Science (BSc)", "Sport Science, Coaching and Physical Education (BSc)", "Sport with a Foundation Year for Elite Athletes (BSc)", "Sports Management (BSc)", "Sports Technology (BEng)", "Sports Technology (MEng)", "Sports Technology with a Foundation Year (BSc)", "Textile Design (BSc)", "Urban Planning (BSc)", "Urban Planning (MSci)"
    ],
    "University of Bristol": [
        "Accounting and Finance (BSc)", "Accounting and Finance with Professional Placement (BSc)", "Accounting and Finance with Study Abroad (BSc)", "Accounting and Management (BSc)", "Accounting and Management with Professional Placement (BSc)", "Accounting and Management with Study Abroad (BSc)", "Accounting with Innovation (MSci)", "Aerospace Engineering (BEng)", "Aerospace Engineering (MEng)", "Aerospace Engineering with a Year in Industry (BEng)", "Aerospace Engineering with a Year in Industry (MEng)", "Aerospace Engineering with Study Abroad (MEng)", "Ancient History (BA)", "Anthropology (BA)", "Anthropology with Innovation (MArts)", "Applied Anatomy (BSc)", "Applied Anatomy (MSci)", "Archaeology and Anthropology (BA)", "Artificial Intelligence (BEng)", "Biochemistry (BSc)", "Biochemistry (MSci)", "Biochemistry with Medical Biochemistry (BSc)", "Biochemistry with Medical Biochemistry (MSci)", "Biochemistry with Molecular Biology and Biotechnology (BSc)", "Biochemistry with Molecular Biology and Biotechnology (MSci)", "Biochemistry with Study in Industry (BSc)", "Biology (BSc)", "Biology (MSci)", "Biology with Professional Placement (BSc)", "Biology with Professional Placement (MSci)", "Biomedical Sciences (BSc)", "Business Analytics (BSc)", "Business and Management (BSc)", "Business and Management with Innovation (MSci)", "Business and Management with Study Abroad (BSc)", "Business and Management with Study Abroad in a Modern Language (BSc)", "Cancer Biology and Immunology (BSc)", "Cancer Biology and Immunology (MSci)", "Cancer Biology and Immunology with Study in Industry (BSc)", "Cellular and Molecular Medicine (BSc)", "Cellular and Molecular Medicine (MSci)", "Cellular and Molecular Medicine with Study in Industry (BSc)", "Chemical Physics (BSc)", "Chemical Physics (MSci)", "Chemical Physics with Industrial Experience (MSci)", "Chemistry (BSc)", "Chemistry (MSci)", "Chemistry with Computing (BSc)", "Chemistry with Computing (MSci)", "Chemistry with Industrial Experience (MSci)", "Chemistry with Study Abroad (MSci)", "Chemistry with Study Abroad in a Modern Language (MSci)", "Childhood Studies (BSc)", "Childhood Studies with Study Abroad (BSc)", "Civil Engineering (BEng)", "Civil Engineering (MEng)", "Civil Engineering with a Year in Industry (BEng)", "Civil Engineering with a Year in Industry (MEng)", "Civil Engineering with Study Abroad (MEng)", "Classical Studies (BA)", "Classics (BA)", "Comparative Literatures and Cultures (BA)", "Comparative Literatures and Cultures and Modern Languages (BA)", "Computer Science (BSc)", "Computer Science (MEng)", "Computer Science with Artificial Intelligence (BSc)", "Computer Science with Artificial Intelligence (MEng)", "Computer Science with Artificial Intelligence with Study Abroad (MEng)", "Computer Science with Innovation (MEng)", "Computer Science with Study Abroad (MEng)", "Criminology (BSc)", "Criminology with Study Abroad (BSc)", "Data Science (BSc)", "Data Science with a Year in Industry (BSc)", "Dental Hygiene (BDH)", "Dental Therapy (BDT)", "Dentistry (BDS)", "Design Engineering (BEng)", "Design Engineering (MEng)", "Design Engineering with a Year in Industry (BEng)", "Design Engineering with a Year in Industry (MEng)", "Design with Innovation (MSci)", "Economics (BA)", "Economics (BSc)", "Economics and Accounting (BSc)", "Economics and Accounting with Professional Placement (BSc)", "Economics and Accounting with Study Abroad (BSc)", "Economics and Data Science (BSc)", "Economics and Econometrics (BSc)", "Economics and Econometrics with Study Abroad (BSc)", "Economics and Finance (BSc)", "Economics and Finance with Study Abroad (BSc)", "Economics and Management (BSc)", "Economics and Management with Study Abroad (BSc)", "Economics and Mathematics (BSc)", "Economics and Politics (BSc)", "Economics and Politics with Study Abroad (BSc)", "Economics with Innovation (MSci)", "Economics with Study Abroad (BSc)", "Economics with Study Abroad in a Modern Language (BSc)", "Education Studies (BSc)", "Education Studies with Study Abroad (BSc)", "Electrical and Electronic Engineering (BEng)", "Electrical and Electronic Engineering (MEng)", "Electrical and Electronic Engineering with a Year in Industry (BEng)", "Electrical and Electronic Engineering with a Year in Industry (MEng)", "Electrical and Electronic Engineering with Study Abroad (MEng)", "Engineering Mathematics (BEng)", "Engineering Mathematics (MEng)", "Engineering Mathematics with a Year in Industry (BEng)", "Engineering Mathematics with a Year in Industry (MEng)", "Engineering Mathematics with Study Abroad (MEng)", "English (BA)", "English and Classical Studies (BA)", "English and History (BA)", "English and Modern Languages (BA)", "English and Philosophy (BA)", "English Literature and Community Engagement (BA)", "English with Study Abroad (BA)", "Environmental Geoscience (BSc)", "Environmental Geoscience (MSci)", "Environmental Geoscience with Study Abroad (MSci)", "Film and English (BA)", "Film and Modern Languages (BA)", "Film and Television (BA)", "Film and Television with Innovation (MArts)", "Finance (BSc)", "Finance with Innovation (MSci)", "Foundation in Arts and Social Sciences (CertHE)", "Foundation in Science, Engineering and Mathematics (CertHE)", "Gateway to Dentistry (BDS)", "Gateway to Medicine (MB ChB)", "Gateway to Veterinary Science (BVSc)", "Geography (BSc)", "Geography with Innovation (MSci)", "Geography with Study Abroad (BSc)", "Geography with Study Abroad in a Modern Language (BSc)", "Geology (BSc)", "Geology (MSci)", "Geology with Study Abroad (MSci)", "History (BA)", "History and Modern Languages (BA)", "History of Art (BA)", "History of Art and Modern Languages (BA)", "History with Innovation (MArts)", "History with Study Abroad (BA)", "International Business Management (BSc)", "International Business Management and Modern Languages (BA)", "International Business Management with Study Abroad (BSc)", "International Business Management with Study Abroad in a Modern Language (BSc)", "International Foundation Programme (Arts and Humanities)", "International Foundation Programme (Science, Technology, Engineering and Mathematics)", "International Foundation Programme (Social Sciences and Law)", "International Foundation Programme for Dentistry", "International Social and Public Policy (BSc)", "International Social and Public Policy with Study Abroad (BSc)", "Law (LLB)", "Law and Modern Languages (LLB)", "Law with Study Abroad (LLB)", "Law with Study in Continental Europe (LLB)", "Liberal Arts (BA)", "Liberal Arts with Study Abroad (MLibArts)", "Marketing (BSc)", "Marketing with Study Abroad (BSc)", "Marketing with Study Abroad in a Modern Language (BSc)", "Mathematics (BSc)", "Mathematics (MSci)", "Mathematics and Computer Science (BSc)", "Mathematics and Computer Science (MEng)", "Mathematics and Philosophy (BSc)", "Mathematics and Philosophy (MSci)", "Mathematics and Physics (BSc)", "Mathematics and Physics (MSci)", "Mathematics with Statistics (BSc)", "Mathematics with Statistics (MSci)", "Mathematics with Statistics for Finance (BSc)", "Mathematics with Study Abroad (MSci)", "Mathematics with Study Abroad in a Modern Language (BSc)", "Mathematics with Study Abroad in a Modern Language (MSci)", "Mechanical and Electrical Engineering (BEng)", "Mechanical and Electrical Engineering (MEng)", "Mechanical and Electrical Engineering with a Year in Industry (BEng)", "Mechanical and Electrical Engineering with a Year in Industry (MEng)", "Mechanical Engineering (BEng)", "Mechanical Engineering (MEng)", "Mechanical Engineering with a Year in Industry (BEng)", "Mechanical Engineering with a Year in Industry (MEng)", "Mechanical Engineering with Study Abroad (MEng)", "Medical Microbiology (BSc)", "Medical Microbiology (MSci)", "Medical Microbiology with Study in Industry (BSc)", "Medicine (MB ChB)", "Modern Languages (BA)", "Music (BA)", "Music and Modern Languages (BA)", "Music with Innovation (MArts)", "Neuroscience (BSc)", "Neuroscience (MSci)", "Neuroscience with Study in Industry (BSc)", "Palaeontology and Evolution (BSc)", "Palaeontology and Evolution (MSci)", "Pharmacology (BSc)", "Pharmacology (MSci)", "Pharmacology with Study in Industry (BSc)", "Philosophy (BA)", "Philosophy and Economics (BSc)", "Philosophy and Economics with Study Abroad (BSc)", "Philosophy and Modern Languages (BA)", "Philosophy and Politics (BSc)", "Philosophy and Theology (BA)", "Physics (BSc)", "Physics (MSci)", "Physics and Philosophy (BSc)", "Physics and Philosophy (MSci)", "Physics with Astrophysics (BSc)", "Physics with Astrophysics (MSci)", "Physics with Computing (BSc)", "Physics with Computing (MSci)", "Physics with Computing with Industrial Experience (MSci)", "Physics with Industrial Experience (MSci)", "Physics with Innovation (MSci)", "Physics with International Experience (MSci)", "Physics with Study Abroad in a Modern Language (MSci)", "Physiological Science (BSc)", "Physiological Science (MSci)", "Physiological Science with Study in Industry (BSc)", "Plant Sciences (BSc)", "Plant Sciences (MSci)", "Plant Sciences with Professional Placement (BSc)", "Plant Sciences with Professional Placement (MSci)", "Politics and International Relations (BSc)", "Politics and International Relations with Study Abroad (BSc)", "Politics and Modern Languages (BA)", "Politics and Sociology (BSc)", "Psychology (BSc)", "Psychology and Neuroscience (MSci)", "Psychology in Education (BSc)", "Psychology in Education with Study Abroad (BSc)", "Psychology with Innovation (MSci)", "Religion and Theology (BA)", "Religion and Theology with Study Abroad (BA)", "Social Policy (BSc)", "Social Policy and Politics (BSc)", "Social Policy and Sociology (BSc)", "Social Policy with Criminology (BSc)", "Social Policy with Study Abroad (BSc)", "Sociology (BSc)", "Sociology and Philosophy (BSc)", "Sociology with Study Abroad (BSc)", "Theatre and English (BA)", "Theatre and Film (BA)", "Theatre and Modern Languages (BA)", "Theatre and Performance Studies (BA)", "Theatre with Innovation (MArts)", "Theoretical Physics (MSci)", "Veterinary Nursing and Companion Animal Behaviour (BSc)", "Veterinary Science (BVSc)", "Veterinary Science: Accelerated Graduate Entry (BVSc)", "Virology and Immunology (BSc)", "Virology and Immunology (MSci)", "Virology and Immunology with Study in Industry (BSc)", "Zoology (BSc)", "Zoology (MSci)", "Zoology with a Professional Placement (BSc)", "Zoology with a Professional Placement (MSci)"
    ],
    "Lancaster University": [
        "Accounting and Finance (BSc)", "Accounting and Finance (Industry) (BSc)", "Accounting and Management (BSc)", "Accounting and Management (Industry) (BSc)", "Advertising and Digital Marketing (BSc)", "Advertising and Digital Marketing (Industry) (BSc)", "Advertising and Digital Marketing (Study Abroad) (BSc)", "Architecture (BA)", "Architecture (Placement Year) (BA)", "Architecture (Study Abroad) (BA)", "Biochemistry (BSc)", "Biochemistry (MSci)", "Biochemistry (Placement Year) (BSc)", "Biochemistry (Study Abroad) (BSc)", "Biochemistry (with a Foundation Year) (BSc)", "Biology (MSci)", "Biology (BSc)", "Biology (Placement Year) (BSc)", "Biology (Study Abroad) (BSc)", "Biology (with a Foundation Year) (BSc)", "Biomedical Science (BSc)", "Biomedical Science (MSci)", "Biomedical Science (Study Abroad) (BSc)", "Biomedical Science (with a Foundation Year) (BSc)", "Biomedicine (BSc)", "Biomedicine (MSci)", "Biomedicine (Placement Year) (BSc)", "Biomedicine (Study Abroad) (BSc)", "Biomedicine (with a Foundation Year) (BSc)", "Business Analytics (BSc)", "Business Analytics (Industry) (BSc)", "Business Analytics (Study Abroad) (BSc)", "Business and Human Resource Management (BSc)", "Business and Human Resource Management (Industry) (BSc)", "Business and Human Resource Management (Study Abroad) (BSc)", "Business Economics (BSc)", "Business Economics (Industry) (BSc)", "Business Economics (Study Abroad) (BSc)", "Business Management (BSc)", "Business Management (Industry) (BSc)", "Business Management (Study Abroad) (BSc)", "Business Management for Entrepreneurship (BSc)", "Business Management for Entrepreneurship (Industry) (BSc)", "Business Management for Entrepreneurship (Study Abroad) (BSc)", "Chemical Engineering (BEng)", "Chemical Engineering (MEng)", "Chemical Engineering (Study Abroad) (BEng)", "Chemical Engineering (Study Abroad) (MEng)", "Chemical Engineering (with a Foundation Year) (BEng)", "Chemical Engineering with Placement Year (BEng)", "Chemical Engineering with Placement Year (MEng)", "Chemistry (BSc)", "Chemistry (MChem)", "Chemistry (Study Abroad) (BSc)", "Chemistry (Study Abroad) (MChem)", "Chemistry (with a Foundation Year) (BSc)", "Chemistry (with Industrial Placement) (MChem)", "Computer Science (BSc)", "Computer Science (Study Abroad) (BSc)", "Computer Science (with Industrial Experience) (MSci)", "Creative Industries (BA)", "Creative Industries (Placement Year) (BA)", "Creative Industries (Study Abroad) (BA)", "Criminology (BA)", "Criminology (Placement Year) (BA)", "Criminology (Study Abroad) (BA)", "Criminology and Psychology (BA)", "Criminology and Psychology (Placement Year) (BA)", "Criminology and Psychology (Study Abroad) (BA)", "Cyber Security (BSc)", "Cyber Security (Study Abroad) (BSc)", "Cyber Security (with Industrial Experience) (MSci)", "Data Science (BSc)", "Data Science (Placement Year) (BSc)", "Data Science (Study Abroad) (BSc)", "Data Science (with Industrial Experience) (MSci)", "Design (BA)", "Design (Placement Year) (BA)", "Design (Study Abroad) (BA)", "Digital Media (BA)", "Digital Media (Placement Year) (BA)", "Digital Media (Study Abroad) (BA)", "Earth and Environmental Science (MSci)", "Earth and Environmental Science (BSc)", "Earth and Environmental Science (Placement Year) (BSc)", "Earth and Environmental Science (Study Abroad) (BSc)", "Ecology and Conservation (BSc)", "Ecology and Conservation (MSci)", "Ecology and Conservation (Placement Year) (BSc)", "Ecology and Conservation (Study Abroad) (BSc)", "Economics (BSc)", "Economics (BA)", "Economics (Industry) (BSc)", "Economics (Industry) (BA)", "Economics (Study Abroad) (BSc)", "Economics (Study Abroad) (BA)", "Economics and Finance (BSc)", "Economics and Finance (Industry) (BSc)", "Economics and Finance (Study Abroad) (BSc)", "Economics, Politics and International Relations (BA)", "Economics, Politics and International Relations (Industry) (BA)", "Economics, Politics and International Relations (Study Abroad) (BA)", "Electronic and Electrical Engineering (MEng)", "Electronic and Electrical Engineering (BEng)", "Electronic and Electrical Engineering (Study Abroad) (BEng)", "Electronic and Electrical Engineering (Study Abroad) (MEng)", "Electronic and Electrical Engineering (with a Foundation Year) (BEng)", "Electronic and Electrical Engineering with Placement Year (BEng)", "Electronic and Electrical Engineering with Placement Year (MEng)", "Engineering (BEng)", "Engineering (MEng)", "Engineering (Study Abroad) (BEng)", "Engineering (Study Abroad) (MEng)", "Engineering (with a Foundation Year) (BEng)", "Engineering with Placement Year (MEng)", "Engineering with Placement Year (BEng)", "English Language (BA)", "English Language (Placement Year) (BA)", "English Language (Study Abroad) (BA)", "English Language and Linguistics (BA)", "English Language and Linguistics (Placement Year) (BA)", "English Language and Linguistics (Study Abroad) (BA)", "English Literature (BA)", "English Literature (Placement Year) (BA)", "English Literature (Study Abroad) (BA)", "English Literature and Creative Writing (BA)", "English Literature and Creative Writing (Placement Year) (BA)", "English Literature and Creative Writing (Study Abroad) (BA)", "English Literature and History (BA)", "English Literature and History (Placement Year) (BA)", "English Literature and History (Study Abroad) (BA)", "Environmental Science (BSc)", "Environmental Science (MSci)", "Environmental Science (Placement Year) (BSc)", "Environmental Science (Study Abroad) (BSc)", "Film and Creative Writing (BA)", "Film and Creative Writing (Placement Year) (BA)", "Film and Creative Writing (Study Abroad) (BA)", "Film and English Literature (BA)", "Film and English Literature (Placement Year) (BA)", "Film and English Literature (Study Abroad) (BA)", "Film Studies (BA)", "Film Studies (Placement Year) (BA)", "Film Studies (Study Abroad) (BA)", "Film, Media and Cultural Studies (BA)", "Film, Media and Cultural Studies (Placement Year) (BA)", "Film, Media and Cultural Studies (Study Abroad) (BA)", "Finance (BSc)", "Finance (Industry) (BSc)", "Fine Art (BA)", "Fine Art (Placement Year) (BA)", "Fine Art (Study Abroad) (BA)", "Geography (MSci)", "Geography (BSc)", "Geography (BA)", "Geography (Placement Year) (BSc)", "Geography (Placement Year) (BA)", "Geography (Study Abroad) (BSc)", "Geography (Study Abroad) (BA)", "Geography and Economics (BA)", "Geography and Economics (Placement Year) (BA)", "Global Religions (BA)", "Global Religions (Placement Year) (BA)", "Global Religions (Study Abroad) (BA)", "History (BA)", "History (Placement Year) (BA)", "History (Study Abroad) (BA)", "History and International Relations (BA)", "History and International Relations (Placement Year) (BA)", "History and International Relations (Study Abroad) (BA)", "History and Politics (BA)", "History and Politics (Placement Year) (BA)", "History and Politics (Study Abroad) (BA)", "Human Geography (BA)", "Human Geography (Placement Year) (BA)", "Human Geography (Study Abroad) (BA)", "International Management (BSc)", "International Management (Industry) (BSc)", "International Management (Study Abroad) (BSc)", "International Relations (BA)", "International Relations (Placement Year) (BA)", "International Relations (Study Abroad) (BA)", "Language Sciences (BSc)", "Language Sciences (Placement Year) (BSc)", "Language Sciences (Study Abroad) (BSc)", "Languages and Global Cultures (MLang)", "Languages and Global Cultures (BA)", "Law (LLB)", "Law (Clinical Learning) (LLB)", "Law (Placement Year) (LLB)", "Law (Study Abroad) (LLB)", "Law with Criminology (LLB)", "Law with Criminology (Placement Year) (LLB)", "Law with Criminology (Study Abroad) (LLB)", "Liberal Arts (BA)", "Liberal Arts (Global Engagement Year) (BA)", "Linguistics (BA)", "Linguistics (Placement Year) (BA)", "Linguistics (Study Abroad) (BA)", "Management (Year 2 Entry) (BSc)", "Management and Digital Technologies (BSc)", "Management and Digital Technologies (Industry) (BSc)", "Marketing (BSc)", "Marketing (Industry) (BSc)", "Marketing (Study Abroad) (BSc)", "Marketing and Design (BSc)", "Marketing and Design (Industry) (BSc)", "Marketing and Design (Study Abroad) (BSc)", "Marketing Management (Industry) (Year 2 Entry) (BSc)", "Marketing Management (Study Abroad) (Year 2 Entry) (BSc)", "Marketing Management (Year 2 Entry) (BSc)", "Mathematics (BSc)", "Mathematics (MSci)", "Mathematics (Placement Year) (BSc)", "Mathematics (Study Abroad) (MSci)", "Mathematics (Study Abroad) (BSc)", "Mathematics (with a Foundation Year) (BSc)", "Mathematics and Statistics (BSc)", "Mathematics and Statistics (MSci)", "Mathematics and Statistics (Placement Year) (BSc)", "Mathematics and Statistics (Study Abroad) (MSci)", "Mathematics and Statistics (Study Abroad) (BSc)", "Mathematics with Computer Science (BSc)", "Mathematics with Computer Science (MSci)", "Mathematics with Computer Science (Placement Year) (BSc)", "Mathematics with Computer Science (Study Abroad) (MSci)", "Mathematics with Computer Science (Study Abroad) (BSc)", "Mathematics with Economics (BSc)", "Mathematics with Economics (Placement Year) (BSc)", "Mathematics with Economics (Study Abroad) (BSc)", "Mathematics with Philosophy (BSc)", "Mathematics with Philosophy (Placement Year) (BSc)", "Mathematics with Philosophy (Study Abroad) (BSc)", "Mathematics, Artificial Intelligence, and Real-world Systems (MARS) (BSc)", "Mathematics, Artificial Intelligence, and Real-world Systems (MARS) (Placement Year) (BSc)", "Mathematics, Artificial Intelligence, and Real-world Systems (MARS) (Study Abroad) (BSc)", "Mathematics, Operational Research, Statistics and Economics (MORSE) (BSc)", "Mathematics, Operational Research, Statistics and Economics (MORSE) (Industry) (BSc)", "Mathematics, Operational Research, Statistics and Economics (MORSE) (Study Abroad) (BSc)", "Mechanical Engineering (BEng)", "Mechanical Engineering (MEng)", "Mechanical Engineering (Study Abroad) (BEng)", "Mechanical Engineering (Study Abroad) (MEng)", "Mechanical Engineering (with a Foundation Year) (BEng)", "Mechanical Engineering with Placement Year (BEng)", "Mechanical Engineering with Placement Year (MEng)", "Mechatronic Engineering (BEng)", "Mechatronic Engineering (MEng)", "Mechatronic Engineering (Study Abroad) (BEng)", "Mechatronic Engineering (Study Abroad) (MEng)", "Mechatronic Engineering (with a Foundation Year) (BEng)", "Mechatronic Engineering with Placement Year (BEng)", "Mechatronic Engineering with Placement Year (MEng)", "Media and Cultural Studies (BA)", "Media and Cultural Studies (Placement Year) (BA)", "Media and Cultural Studies (Study Abroad) (BA)", "Medicine and Surgery (MBChB)", "Medicine and Surgery with a Gateway Year (MBChB)", "Natural Sciences (MSci)", "Natural Sciences (BSc)", "Natural Sciences (Placement Year) (BSc)", "Natural Sciences (Study Abroad) (MSci)", "Natural Sciences (Study Abroad) (BSc)", "Natural Sciences (with a Foundation Year) (BSc)", "Neuroscience (BSc)", "Neuroscience (MSci)", "Neuroscience (Placement Year) (BSc)", "Neuroscience (Study Abroad) (BSc)", "Nuclear Engineering (BEng)", "Nuclear Engineering (MEng)", "Nuclear Engineering (Study Abroad) (BEng)", "Nuclear Engineering (Study Abroad) (MEng)", "Nuclear Engineering (with a Foundation Year) (BEng)", "Nuclear Engineering with Placement Year (BEng)", "Nuclear Engineering with Placement Year (MEng)", "Pharmaceutical Science (BSc)", "Pharmaceutical Science (MSci)", "Pharmaceutical Science (Placement Year) (BSc)", "Pharmaceutical Science (Study Abroad) (BSc)", "Pharmacology (BSc)", "Pharmacology (MSci)", "Pharmacology (Placement year) (BSc)", "Pharmacology (Study Abroad) (BSc)", "Pharmacology (with a Foundation Year) (BSc)", "Philosophy (BA)", "Philosophy (Placement Year) (BA)", "Philosophy (Study Abroad) (BA)", "Philosophy and Politics (BA)", "Philosophy and Politics (Placement Year) (BA)", "Philosophy and Politics (Study Abroad) (BA)", "Philosophy, Politics and Economics (BA)", "Philosophy, Politics and Economics (Placement Year) (BA)", "Philosophy, Politics and Economics (Study Abroad) (BA)", "Physical Geography (MSci)", "Physical Geography (BSc)", "Physical Geography (Placement Year) (BSc)", "Physical Geography (Study Abroad) (BSc)", "Physics (BSc)", "Physics (MPhys)", "Physics (Study Abroad) (BSc)", "Physics (Study Abroad) (MPhys)", "Physics (with a Foundation Year) (BSc)", "Physics with Astrophysics (MPhys)", "Physics with Astrophysics (BSc)", "Physics with Astrophysics (Study Abroad) (BSc)", "Physics with Astrophysics (Study Abroad) (MPhys)", "Politics (BA)", "Politics (Placement Year) (BA)", "Politics (Study Abroad) (BA)", "Politics and International Relations (BA)", "Politics and International Relations (Placement Year) (BA)", "Politics and International Relations (Study Abroad) (BA)", "Psychology (BSc)", "Psychology (Study Abroad) (BSc)", "Psychology and Languages (BA)", "Psychology and Linguistics (BA)", "Social Work (BA)", "Sociology (BA)", "Sociology (Placement Year) (BA)", "Sociology (Study Abroad) (BA)", "Sociology and Criminology (BA)", "Sociology and Criminology (Placement Year) (BA)", "Sociology and Criminology (Study Abroad) (BA)", "Software Engineering (BSc)", "Software Engineering (Study Abroad) (BSc)", "Software Engineering (with Industrial Experience) (MSci)", "Sports and Exercise Science (BSc)", "Sports and Exercise Science (Study Abroad) (BSc)", "Theatre and Performing (BA)", "Theatre and Performing (Placement Year) (BA)", "Theatre and Performing (Study Abroad) (BA)", "Theoretical Physics (MPhys)", "Theoretical Physics (BSc)", "Theoretical Physics (Study Abroad) (MPhys)", "Theoretical Physics (Study Abroad) (BSc)", "Theoretical Physics with Mathematics (MSci)", "Theoretical Physics with Mathematics (BSc)", "Theoretical Physics with Mathematics (Study Abroad) (BSc)", "Theoretical Physics with Mathematics (Study Abroad) (MSci)"
    ],
    "University of Sheffield": [
        "Accounting and Financial Management (BA)", "Accounting and Financial Management and Economics (BA)", "Aerospace Engineering (MEng)", "Aerospace Engineering (BEng)", "Aerospace Engineering with a Foundation Year (BEng | MEng)", "Aerospace Engineering with an Industrial Placement Year (BEng)", "Aerospace Engineering with an Industrial Placement Year (MEng)", "Architectural Engineering (MEng)", "Architectural Engineering with an Industrial Placement Year (MEng)", "Architecture (BA)", "Architecture and Landscape (BA)", "Biochemistry (BSc)", "Biochemistry (MBiolSci)", "Biochemistry with an Industrial Placement Year (BSc)", "Biological Sciences (BSc)", "Biological Sciences (MBiolSci)", "Biological Sciences with Foundation Year (BSc)", "Biological Sciences with Placement Year (BSc)", "Biological Sciences with Placement Year (MBioSci)", "Biomedical Engineering (BEng)", "Biomedical Engineering (MEng)", "Biomedical Engineering with an Industrial Placement Year (BEng)", "Biomedical Engineering with an Industrial Placement Year (MEng)", "Biomedical Engineering with a Foundation Year (BEng | MEng)", "Biomedical Science (BSc)", "Biomedical Science (MBiomedSci)", "Biomedical Science with Foundation Year (BSc)", "Biomedical Science with an Industrial Placement Year (MBiomedSci)", "Biomedical Science with an Industrial Placement Year (BSc)", "Business Management (BA)", "Business Management with a Foundation Year (BA)", "Business Management and Economics (BA)", "Business Management and Modern Languages & Cultures (BA)", "Chemical Engineering (BEng)", "Chemical Engineering (MEng)", "Chemical Engineering with a Foundation Year (BEng | MEng)", "Chemical Engineering with an Industrial Placement Year (BEng)", "Chemical Engineering with an Industrial Placement Year (MEng)", "Chemistry (BSc)", "Chemistry (MChem)", "Chemistry with an Industrial Placement Year (MChem)", "Chemistry with an Industrial Placement Year (BSc)", "Chemistry with Biological and Medicinal Chemistry (BSc)", "Chemistry with Biological and Medicinal Chemistry (MChem)", "Civil and Structural Engineering (MEng)", "Civil and Structural Engineering with a Foundation Year (BEng | MEng)", "Civil and Structural Engineering with an Industrial Placement Year (BSc)", "Civil Engineering (BEng)", "Civil Engineering (MEng)", "Civil Engineering with an Industrial Placement Year (BEng)", "Civil Engineering with an Industrial Placement Year (MEng)", "Computer Science (MComp)", "Computer Science (BSc)", "Computer Science with a Foundation Year (BSc | MComp)", "Computer Science with an Industrial Placement Year (BSc)", "Computer Science with an Industrial Placement Year (MComp)", "Computer Science (Artificial Intelligence) (MComp)", "Computer Science (Artificial Intelligence) (BSc)", "Computer Science (Artificial Intelligence) with an Industrial Placement Year (BSc)", "Computer Science (Artificial Intelligence) with an Industrial Placement Year (MComp)", "Computer Science (Software Engineering) (MEng)", "Computer Science (Software Engineering) (BEng)", "Computer Science (Software Engineering) with an Industrial Placement Year (MEng)", "Computer Science (Software Engineering) with an Industrial Placement Year (BEng)", "Computer Systems Engineering (MEng)", "Computer Systems Engineering (BEng)", "Computer Systems Engineering with an Industrial Placement Year (BEng)", "Criminology (BA)", "Criminology with a Foundation Year (BA)", "Data Science (BSc)", "Dental Hygiene and Dental Therapy (Higher Education Diploma)", "Dental Surgery (BDS)", "Digital Media and Society (BA)", "East Asian Studies (BA)", "East Asian Studies with a Foundation Year (BA)", "Economics (BA)", "Economics (BSc)", "Economics and Mathematics (BSc)", "Economics and Politics (BA)", "Economics with Finance (BSc)", "Electrical and Electronic Engineering (BEng)", "Electrical and Electronic Engineering (MEng)", "Electrical and Electronic Engineering with a Foundation Year (BEng | MEng)", "Electrical and Electronic Engineering with an Industrial Placement Year (BEng)", "Electrical and Electronic Engineering with an Industrial Placement Year (MEng)", "English and History (BA)", "English and History with a Foundation Year (BA)", "English and Modern Languages & Cultures (BA)", "English and Music (BA)", "English and Philosophy (BA)", "English Language and Linguistics (BA)", "English Language and Linguistics with Foundation Year (BA)", "English Language and Literature (BA)", "English Language and Literature with a Foundation Year (BA)", "English Literature (BA)", "English Literature with Foundation Year (BA)", "Environmental Science (BSc)", "Environmental Science with Foundation Year (BSc)", "Financial Mathematics (BSc)", "General Engineering (MEng (Hons))", "General Engineering (BEng (Hons))", "General Engineering with a Foundation Year (BEng | MEng)", "General Engineering with an Industrial Placement Year (BEng)", "General Engineering with an Industrial Placement Year (MEng)", "Geography (BA)", "Geography (BSc)", "Geography with a Foundation Year (BSc)", "Geography with a Foundation Year (BA)", "Geography and Planning (BA)", "Geography and Planning with a Foundation Year (BA)", "Global Sustainable Development (BA)", "Global Sustainable Development with a Foundation Year (BA)", "Graduate Entry Medicine (MBChB)", "History (BA)", "History with a Foundation Year (BA)", "History and Modern Languages & Cultures (BA)", "History and Philosophy (BA)", "History and Philosophy with a Foundation Year (BA)", "History and Politics (BA)", "History and Politics with a Foundation Year (BA)", "History and Sociology (BA)", "International Business Management with Study Abroad (BA)", "Journalism Studies (BA)", "Journalism Studies with a Foundation Year (BA)", "Landscape Architecture (BA)", "Landscape Architecture (MLA)", "Law (LLB)", "Law with a Foundation Year (LLB)", "Law (European and International) (LLB)", "Law and Criminology (LLB)", "Linguistics and Modern Languages & Cultures (BA)", "Materials Science and Engineering (MEng)", "Materials Science and Engineering (BEng)", "Materials Science and Engineering with a Foundation Year (BEng | MEng)", "Materials Science and Engineering with an Industrial Placement Year (BEng)", "Mathematics (MMath)", "Mathematics (BSc)", "Mathematics and Philosophy (BSc)", "Mathematics and Statistics (BSc)", "Mathematics and Statistics (MMath)", "Mechanical Engineering (BEng)", "Mechanical Engineering (MEng)", "Mechanical Engineering with a Foundation Year (BEng | MEng)", "Mechanical Engineering with an Industrial Placement Year (BEng)", "Mechanical Engineering with an Industrial Placement Year (MEng)", "Mechatronic and Robotic Engineering (BEng)", "Mechatronic and Robotic Engineering (MEng)", "Medicine (MBChB)", "Modern Languages and Cultures (BA)", "Modern Languages and Cultures with a Foundation Year (BA)", "Music (BMus)", "Music with a Foundation Year (BMus)", "Music and East Asian Studies (BA)", "Music and Modern Languages & Cultures (BA)", "Nursing (Adult) (BMedSci)", "Nursing (Adult) with a Foundation Year (BMedSci)", "Orthoptics (BMedSci)", "Orthoptics with a Foundation Year (BMedSci)", "Pharmacy (MPharm)", "Pharmacy with Preparatory Year (MPharm)", "Philosophy (BA)", "Philosophy with a Foundation Year (BA)", "Philosophy, Politics and Economics (BA)", "Philosophy, Religion and Ethics (BA)", "Philosophy, Religion and Ethics with a Foundation Year (BA)", "Physics (BSc)", "Physics (MPhys)", "Physics with a Foundation Year (BSc | MPhys)", "Physics with an Industrial Placement Year (MPhys)", "Physics and Astrophysics (BSc)", "Physics and Astrophysics (MPhys)", "Politics and International Relations (BA)", "Politics and Modern Languages & Cultures (BA)", "Politics and Philosophy (BA)", "Politics and Philosophy with a Foundation Year (BA)", "Politics, Philosophy and Economics (BA)", "Politics and Sociology (BA)", "Psychology (BSc)", "Psychology with a Foundation Year (BSc)", "Psychology with an Industrial Placement Year (BSc)", "Robotics with a Foundation Year (BEng)", "Robotics with a Foundation Year (MEng)", "Social Sciences (BA)", "Sociology (BA)", "Sociology with a Foundation Year (BA)", "Software Engineering with a Foundation Year (BEng | MEng)", "Speech and Language Therapy (BMedSci)", "Speech and Language Therapy with a Foundation Year (BMedSci)", "Theoretical Physics (BSc)", "Theoretical Physics (MPhys)", "Urban Planning (MPlan(UG))", "Urban Studies and Planning (MPlan(UG))", "Urban Studies and Planning with a Foundation Year (MPlan(UG))", "Zoology (BSc)", "Zoology (MBiolSci)", "Zoology with an Industrial Placement Year (BSc)", "Zoology with an Industrial Placement Year (MBiolSci)"
    ],
    "University of Exeter": [
        "Accounting and Business (BSc)", "Accounting and Finance (BSc)", "Adult Nursing (BSc)", "Ancient History (BA)", "Ancient History and Archaeology (BA)", "Animal Behaviour (BSc)", "Animal Behaviour (MSci)", "Anthropology (BA)", "Applied Psychology (Clinical) (MSci)", "Arab and Islamic Studies Undergraduate (MArabic)", "Arabic and Politics (BA)", "Archaeological Science (BSc)", "Archaeology (BA)", "Archaeology and Anthropology (BA)", "Archaeology with Forensic Science (BSc)", "Art History & Visual Culture (BA)", "Art History & Visual Culture and Classical Studies (BA)", "Art History & Visual Culture and Drama (BA)", "Art History & Visual Culture and English (BA)", "Art History & Visual Culture and Film & Television Studies (BA)", "Art History & Visual Culture and History (BA)", "Art History & Visual Culture and Modern Languages (BA)", "Bachelor of Business and Laws (BSc)", "Biochemistry (BSc)", "Biochemistry (MSci)", "Biological Sciences (BSc)", "Biological Sciences (MSci)", "Biomedical Engineering (BEng)", "Biomedical Engineering (MEng)", "Biomedical Engineering with Foundation Year (BEng)", "Biomedical Sciences (BSc)", "Business Analytics (BSc)", "Business (BSc)", "Business Economics (BSc)", "Business and Environment (BSc)", "Business and Management (BSc)", "Chartered Manager Degree Apprenticeship Fast track", "Chemical Engineering (BEng)", "Chemical Engineering (MEng)", "Chemical Engineering with Foundation Year (BEng)", "Civil Engineering (BEng)", "Civil Engineering Degree Apprenticeship", "Civil Engineering (MEng)", "Civil Engineering with Foundation Year (BEng)", "Classical Studies (BA)", "Classical Studies and English (BA)", "Classical Studies and Modern Languages (BA)", "Classical Studies and Philosophy (BA)", "Classical Studies and Religion (BA)", "Classics (BA)", "Comparative Literatures and Cultures (BA)", "Comparative Literatures and Cultures and Modern Languages (BA)", "Computer Science (BSc)", "Computer Science (MSci)", "Computer Science and Mathematics (BSc)", "Computer Science and Mathematics (MSci)", "Computer Science with Foundation Year (BSc)", "Conservation Biology and Ecology (BSc)", "Conservation Biology and Ecology (MSci)", "Crime and Data Science (BSc)", "Criminology (BSc)", "Data Science (BSc)", "Data Science (MSci)", "Data Science with Foundation Year (BSc)", "Diagnostic Radiographer Degree Apprenticeship (BSc)", "Digital Media Technology (BSc)", "Digital and Technology Solutions Degree Apprenticeship (BSc)", "Drama (BA)", "Drama and Film & Television Studies (BA)", "Dual LLB/JD with the Chinese Uni of Hong Kong (LLB)", "Economics (BSc)", "Economics and Finance (BSc)", "Economics and Politics (BSc)", "Economics with Econometrics (BSc)", "Electrical and Electronic Engineering (BEng)", "Electrical and Electronic Engineering (MEng)", "Electrical and Electronic Engineering with Foundation Year (BEng)", "Energy and Environmental Engineering (BEng)", "Engineering (BEng)", "Engineering Geology and Geotechnics (BSc)", "Engineering Geology and Geotechnics (MSci)", "Engineering (MEng)", "Engineering and Entrepreneurship (BEng)", "Engineering and Entrepreneurship (MEng)", "Engineering and Management (BEng)", "Engineering and Management (MEng)", "Engineering with Foundation Year (BEng)", "English (BA)", "English Law and French Law (LLB)", "English and Creative Writing (BA)", "English and Drama (BA)", "English and Film & Television Studies (BA)", "English and History (BA)", "English and Media & Communications (BA)", "English and Modern Languages (BA)", "English with Study in North America (BA)", "Environmental Engineering (BEng)", "Environmental Engineering (MEng)", "Energy and Environmental Engineering BEng (at ZJUT) (BEng)", "Environmental Engineering with Foundation Year (BEng)", "Environmental Geoscience (BSc)", "Environmental Geoscience (MSci)", "Environmental Humanities (BA)", "Environmental Science (BSc)", "Environmental Science (MSci)", "Evolutionary Biology (BSc)", "Evolutionary Biology (MSci)", "Exercise and Sport Sciences (BSc)", "Film & Television Studies (BA)", "Film & Television Studies and Media & Communications (BA)", "Film & Television Studies and Media and Communications (BA)", "Film & Television Studies and Modern Languages (BA)", "Finance (BSc)", "Finance: Business Management (BSc)", "Finance: Data Science (BSc)", "Finance: Investment Banking (BSc)", "Financial Services Professional Degree Apprenticeship (BSc)", "Flexible Combined Honours (BSc)", "Foundation", "Geography (BA)", "Geography (BSc)", "Geography (BA)", "Geography (BA)", "Geography (BSc)", "Geography (BSc)", "Geography with Applied GIS (BSc)", "Geography with Applied Geographical Information Systems (GIS) (BSc)", "Geology (BSc)", "Geology (MSci)", "Global Politics (BA)", "Global Sustainability (BA)", "Global Sustainability (BA)", "Graduate Law (LLB)", "History (BA)", "History (BA)", "History and Ancient History (BA)", "History and Archaeology (BA)", "History and Business (BA)", "History and Business (BA)", "History and International Relations (BA)", "History and Modern Languages (BA)", "History and Politics (BA)", "History and Politics (BA)", "International Business and Modern Languages (BA)", "International Relations (BA)", "International Relations and Modern Languages (BA)", "International Year One", "Law (LLB)", "Law with Professional Placement (LLB)", "Law: for Brickfields Asia College students (LLB)", "Law with Business (LLB)", "Law with European Study (LLB)", "Liberal Arts (BA)", "Marine Biology (BSc)", "Marine Biology (MSci)", "Marine Science (BSc)", "Marketing and Management (BSc)", "Mathematics (Climate Science) (MSci)", "Mathematics (Geophysical and Astrophysical Fluid Dynamics) (MSci)", "Mathematics (Mathematical Biology) (MSci)", "Mathematics (BSc)", "Mathematics (MMath)", "Mathematics and Data Science (BSc)", "Mathematics and Data Science (MSci)", "Mathematics with Accounting (BSc)", "Mathematics with Accounting (MSci)", "Mathematics with Economics (BSc)", "Mathematics with Economics (MSci)", "Mathematics with Finance (BSc)", "Mathematics with Finance (MSci)", "Mathematics with Foundation Year (BSc)", "Mathematics with Management (BSc)", "Mathematics with Management (MSci)", "Mechanical Engineering (BEng)", "Mechanical Engineering (MEng)", "Mechanical Engineering with Foundation Year (BEng)", "Media & Communications and Modern Languages (BA)", "Media and Communications (BA)", "Media and Communications and Modern Languages (BA)", "Medical Imaging (Diagnostic Radiography) (BSc)", "Medical Imaging (Diagnostic Radiography) (MSci)", "Medicine (BSc)", "Middle East Studies (BA)", "Mine Management (Degree Apprenticeship)", "Mining Engineering (BEng)", "Mining Engineering (BEng)", "Mining Engineering (BEng)", "Mining Engineering (MEng)", "Mining Engineering with Foundation Year (BEng)", "Modern Languages (BA)", "Modern Languages and Arabic (BA)", "Modern Languages and Latin (BA)", "Modern Languages and Latin (BA)", "Natural Sciences (BSc)", "Natural Sciences (MSci)", "Natural Sciences with Foundation Year (BSc)", "Neuroscience (BSc)", "Nursing (MSci)", "Philosophy (BA)", "Philosophy and History (BA)", "Philosophy and Modern Languages (BA)", "Philosophy and Politics (BA)", "Philosophy and Sociology (BA)", "Philosophy, Religion and Ethics (BA)", "Physics (BSc)", "Physics (MPhys)", "Physics with Astrophysics (BSc)", "Physics with Astrophysics (MPhys)", "Physics with Biophysics (BSc)", "Physics with Biophysics (MPhys)", "Physics with Foundation Year (BSc)", "Physics with Quantum Technology (BSc)", "Physics with Quantum Technology (MPhys)", "Politics (BA)", "Politics and Business (BSc)", "Politics and Geography (BA)", "Politics and International Relations (BA)", "Politics and International Relations (BSc)", "Politics and Modern Languages (BA)", "Politics and Sociology (BA)", "Politics, Philosophy and Economics (BA)", "Psychological Wellbeing Practitioner Apprenticeship", "Psychology (BSc)", "Religion, Culture and Society (BA)", "Renewable Energy Engineering (BEng)", "Renewable Energy Engineering (MEng)", "Renewable Energy Engineering with Foundation Year (BEng)", "Renewable Energy Engineering with Foundation year (BEng)", "Resource and Exploration Geology (BSc)", "Resource and Exploration Geology (MSci)", "Robotics and Artificial Intelligence (BEng)", "Robotics and Artificial Intelligence (MEng)", "Robotics and Artificial Intelligence with Foundation Year (BEng)", "Social Data Science (BSc)", "Sociology (BA)", "Sociology (BSc)", "Sociology and Anthropology (BA)", "Sociology and Criminology (BA)", "Sociology and Modern Languages (BA)", "Systems Engineering (BEng)", "Systems Engineering (MEng)", "Systems Engineering with Foundation Year (BEng)", "Theology and Religion (BA)", "Theoretical Physics (BSc)", "Theoretical Physics (MPhys)", "Zoology (BSc)", "Zoology (MSci)"
    ],
    "University of Aberdeen": [
        "Accountancy (MA)", "Accountancy and Business Management (MA)", "Accountancy and Economics (MA)", "Accountancy and Finance (MA)", "Accountancy and French (MA)", "Accountancy and German (MA)", "Accountancy and Legal Studies (MA)", "Accountancy and Spanish & Latin American Studies (MA)", "Animal Behaviour (BSc)", "Animal Behaviour and Welfare (BSc)", "Anthropology (MA)", "Anthropology and Archaeology (MA)", "Anthropology and English (MA)", "Anthropology and Film & Visual Culture (MA)", "Anthropology and French (MA)", "Anthropology and French (5 years) (MA)", "Anthropology and Gaelic Studies (MA)", "Anthropology and Geography (MA)", "Anthropology and German (MA)", "Anthropology and German (5 years) (MA)", "Anthropology and History (MA)", "Anthropology and International Relations (MA)", "Anthropology and Language & Linguistics (MA)", "Anthropology and Philosophy (MA)", "Anthropology and Politics (MA)", "Anthropology and Psychology (MA)", "Anthropology and Sociology (MA)", "Anthropology and Spanish & Latin American Studies (MA)", "Anthropology and Spanish & Latin American Studies (5 years) (MA)", "Anthropology and Theology & Religion (MA)", "Applied Mathematics (MA)", "Applied Mathematics (BSc)", "Archaeology (BSc)", "Archaeology (MA)", "Archaeology and Art History (MA)", "Archaeology and Celtic & Anglo-Saxon Studies (MA)", "Archaeology and Gaelic Studies (MA)", "Archaeology and History (MA)", "Archaeology and Language & Linguistics (MA)", "Art History (MA)", "Art History and Celtic & Anglo-Saxon Studies (MA)", "Art History and English (MA)", "Art History and Film & Visual Culture (MA)", "Art History and French (MA)", "Art History and French (5 years) (MA)", "Art History and History (MA)", "Art History and Music (MA)", "Art History and Spanish & Latin American Studies (MA)", "Art History and Spanish & Latin American Studies (5 years) (MA)", "Art History and Theology & Religion (MA)", "Biochemistry (BSc)", "Biological Sciences (BSc)", "Biology (BSc)", "Biomedical Sciences (BSc)", "Business Management (MA)", "Business Management and Economics (MA)", "Business Management and English (MA)", "Business Management and Finance (MA)", "Business Management and French (MA)", "Business Management and French (5 years) (MA)", "Business Management and Gaelic Studies (MA)", "Business Management and Geography (MA)", "Business Management and German (MA)", "Business Management and German (5 years) (MA)", "Business Management and History (MA)", "Business Management and Information Systems (BSc)", "Business Management and Information Systems (MA)", "Business Management and International Relations (MA)", "Business Management and Legal Studies (MA)", "Business Management and Mathematics (MA)", "Business Management and Politics (MA)", "Business Management and Psychology (MA)", "Business Management and Real Estate (MA)", "Business Management and Sociology (MA)", "Business Management and Spanish & Latin American Studies (MA)", "Business Management and Spanish & Latin American Studies (5 years) (MA)", "Celtic & Anglo Saxon Studies and German (MA)", "Celtic & Anglo Saxon Studies and Spanish & Latin American Studies (MA)", "Celtic & Anglo Saxon Studies and Theology & Religion (MA)", "Celtic & Anglo-Saxon Studies (MA)", "Celtic & Anglo-Saxon Studies and English (MA)", "Celtic & Anglo-Saxon Studies and Film & Visual Culture (MA)", "Celtic & Anglo-Saxon Studies and French (MA)", "Celtic & Anglo-Saxon Studies and French (5 years) (MA)", "Celtic & Anglo-Saxon Studies and Gaelic Studies (MA)", "Celtic & Anglo-Saxon Studies and German (5 years) (MA)", "Celtic & Anglo-Saxon Studies and History (MA)", "Celtic & Anglo-Saxon Studies and Language & Linguistics (MA)", "Celtic & Anglo-Saxon Studies and Philosophy (MA)", "Celtic & Anglo-Saxon Studies and Sociology (MA)", "Celtic & Anglo-Saxon Studies and Spanish & Latin American Studies (5 years) (MA)", "Certificate in Archaeology (Certificate)", "Chemical Engineering (BEng)", "Chemical Engineering (MEng)", "Chemistry (BSc)", "Chemistry (5 years) (MChem)", "Childhood Practice (BA)", "Civil and Environmental Engineering (MEng)", "Civil and Structural Engineering (MEng)", "Civil Engineering (MEng)", "Civil Engineering with Subsea Technology (5 years) (MEng)", "Comparative Literature & Culture (MA)", "Comparative Literature & Culture (5 years) (MA)", "Comparative Literature & Culture and French (5 years) (MA)", "Comparative Literature & Culture and Gaelic (MA)", "Comparative Literature & Culture and German (5 years) (MA)", "Comparative Literature & Culture and Spanish & Latin American Studies (5 years) (MA)", "Comparative Literature & Culture with French (MA)", "Comparative Literature & Culture with Gaelic (MA)", "Comparative Literature & Culture with German (MA)", "Comparative Literature & Culture with Mandarin (MA)", "Comparative Literature & Culture with Spanish & Latin American Studies (MA)", "Computing (MA)", "Computing and Music (MA)", "Computing Science (BSc)", "Computing Science (5 years) (MEng)", "Computing Science (Artificial Intelligence) (MEng)", "Computing Science (Cybersecurity) (MEng)", "Computing Science and Mathematics (BSc)", "Computing Science and Physics (BSc)", "Computing Science with Industrial Placement (MSci)", "Conservation Biology (BSc)", "Counselling Skills (ISS)", "Counselling, Psychology and Education (MSci)", "Criminology and Sociology (MA)", "Data Science (BSc)", "Dentistry (BDS)", "Diploma in Archaeology (DipHE)", "Divinity (BD)", "Ecology (BSc)", "Economics (MA)", "Economics and Finance (MA)", "Economics and French (MA)", "Economics and French (5 years) (MA)", "Economics and Gaelic Studies (MA)", "Economics and Geography (MA)", "Economics and German (MA)", "Economics and German (5 years) (MA)", "Economics and History (MA)", "Economics and International Relations (MA)", "Economics and Legal Studies (MA)", "Economics and Mathematics (MA)", "Economics and Philosophy (MA)", "Economics and Politics (MA)", "Economics and Psychology (MA)", "Economics and Sociology (MA)", "Economics and Spanish & Latin American Studies (MA)", "Economics and Spanish & Latin American Studies (5 years) (MA)", "Electrical and Electronic Engineering (MEng)", "Electrical and Electronic Engineering with Renewable Energy (MEng)", "Electrical and Electronic Engineering with Robotics (MEng)", "Engineering (MEng)", "Engineering (BEng)", "Engineering (Civil and Environmental) (BEng)", "Engineering (Civil and Structural) (BEng)", "Engineering (Civil) (BEng)", "Engineering (Electrical and Electronic) (BEng)", "Engineering (Electronic and Software) (BEng)", "Engineering (Mechanical and Electrical) (BEng)", "Engineering (Mechanical with Oil and Gas Studies) (BEng)", "Engineering (Mechanical) (BEng)", "Engineering in Electronic and Software Engineering (MEng)", "English (MA)", "English and Film & Visual Culture (MA)", "English and French (MA)", "English and French (5 years) (MA)", "English and Gaelic Studies (MA)", "English and German (MA)", "English and German (5 years) (MA)", "English and History (MA)", "English and International Relations (MA)", "English and Language & Linguistics (MA)", "English and Music (MA)", "English and Philosophy (MA)", "English and Scottish Literature (MA)", "English and Sociology (MA)", "English and Spanish & Latin American Studies (MA)", "English and Spanish & Latin American Studies (5 years) (MA)", "English and Theology & Religion (MA)", "English Language & Literature (MA)", "English with Creative Writing (MA)", "Environmental Science (BSc)", "Exercise and Health Science (BSc)", "Film & Visual Culture (MA)", "Film & Visual Culture and French (MA)", "Film & Visual Culture and French (5 years) (MA)", "Film & Visual Culture and Gaelic Studies (MA)", "Film & Visual Culture and German (MA)", "Film & Visual Culture and German (5 years) (MA)", "Film & Visual Culture and History (MA)", "Film & Visual Culture and International Relations (MA)", "Film & Visual Culture and Philosophy (MA)", "Film & Visual Culture and Sociology (MA)", "Film & Visual Culture and Spanish & Latin American Studies (MA)", "Film & Visual Culture and Spanish & Latin American Studies (5 years) (MA)", "Finance (MA)", "Finance and French (MA)", "Finance and French (5 years) (MA)", "Finance and German (MA)", "Finance and German (5 years) (MA)", "Finance and International Relations (MA)", "Finance and Real Estate (MA)", "Finance and Spanish & Latin American Studies (MA)", "Finance and Spanish & Latin American Studies (5 years) (MA)", "French and Gaelic Studies (MA)", "French and Geography (MA)", "French and German (MA)", "French and History (MA)", "French and History (5 years) (MA)", "French and International Relations (MA)", "French and International Relations (5 years) (MA)", "French and Language & Linguistics (MA)", "French and Language & Linguistics (5 years) (MA)", "French and Legal Studies (MA)", "French and Legal Studies (5 years) (MA)", "French and Music (MA)", "French and Music (5 years) (MA)", "French and Philosophy (MA)", "French and Philosophy (5 years) (MA)", "French and Politics (MA)", "French and Politics (5 years) (MA)", "French and Sociology (MA)", "French and Sociology (5 years) (MA)", "French and Spanish & Latin American Studies (MA)", "Gaelic Studies and Geography (MA)", "Gaelic Studies and German (MA)", "Gaelic Studies and History (MA)", "Gaelic Studies and Language & Linguistics (MA)", "Gaelic Studies and Music (MA)", "Gaelic Studies and Politics (MA)", "Gaelic Studies and Sociology (MA)", "Gaelic Studies and Spanish & Latin American Studies (MA)", "Gaelic Studies and Theology & Religion (MA)", "Gateway2Medicine (Certificate)", "Geography (MA)", "Geography (BSc)", "Geography and German (MA)", "Geography and German (5 years) (MA)", "Geography and International Relations (MA)", "Geography and Sociology (MA)", "Geography and Spanish & Latin American Studies (MA)", "Geography and Spanish & Latin American Studies (5 years) (MA)", "Geology (BSc)", "Geology and Physics (BSc)", "Geoscience (BSc)", "German and History (MA)", "German and History (5 years) (MA)", "German and International Relations (MA)", "German and International Relations (5 years) (MA)", "German and Language & Linguistics (MA)", "German and Language & Linguistics (5 years) (MA)", "German and Legal Studies (MA)", "German and Legal Studies (5 years) (MA)", "German and Mathematics (MA)", "German and Mathematics (MA)", "German and Music (MA)", "German and Music (5 years) (MA)", "German and Philosophy (MA)", "German and Philosophy (5 years) (MA)", "German and Politics (MA)", "German and Politics (5 years) (MA)", "German and Sociology (MA)", "German and Sociology (5 years) (MA)", "German and Spanish & Latin American Studies (MA)", "History (MA)", "History and International Relations (MA)", "History and Language & Linguistics (MA)", "History and Legal Studies (MA)", "History and Music (MA)", "History and Philosophy (MA)", "History and Politics (MA)", "History and Sociology (MA)", "History and Spanish & Latin American Studies (MA)", "History and Spanish & Latin American Studies (5 years) (MA)", "History and Theology & Religion (MA)", "History with Music Studies (MA)", "International and Comparative Law (LLB)", "International Business (MA)", "International Business (5 years) (MBus)", "International Business with French (MA)", "International Business with French (5 years) (MBus)", "International Business with Gaelic (MA)", "International Business with Gaelic (5 years) (MBus)", "International Business with German (MA)", "International Business with German (5 years) (MBus)", "International Business with Mandarin (MA)", "International Business with Mandarin (5 years) (MBus)", "International Business with Spanish (MA)", "International Business with Spanish (5 years) (MBus)", "International Relations and Language & Linguistics (MA)", "International Relations and Legal Studies (MA)", "International Relations and Sociology (MA)", "International Relations and Spanish & Latin American Studies (MA)", "International Relations and Spanish & Latin American Studies (5 years) (MA)", "International Relations and Theology & Religion (MA)", "Language & Linguistics (MA)", "Language & Linguistics and Philosophy (MA)", "Language & Linguistics and Psychology (MA)", "Language & Linguistics and Sociology (MA)", "Language & Linguistics and Spanish & Latin American Studies (MA)", "Language & Linguistics and Spanish & Latin American Studies (5 years) (MA)", "Language and Linguistics with Mandarin (MA)", "Law (LLB)", "Law - Accelerated (LLB)", "Law and European Legal Studies (5 years) (LLB)", "Law and French Law (5 years) (LLB)", "Law and German Law (5 years) (LLB)", "Law and Spanish Law (5 years) (LLB)", "Law with Computing Science (LLB)", "Law with English Law (LLB)", "Law with English Law - Accelerated (LLB)", "Law with English Law and European Legal Studies (5 years) (LLB)", "Law with options in Accountancy (LLB)", "Law with options in Business Management (LLB)", "Law with options in Economics (LLB)", "Law with options in French (LLB)", "Law with options in Gaelic Language (LLB)", "Law with options in German (LLB)", "Law with options in Mandarin (LLB)", "Law with options in Music (LLB)", "Law with options in Spanish (LLB)", "Legal Studies and Philosophy (MA)", "Legal Studies and Politics (MA)", "Legal Studies and Psychology (MA)", "Legal Studies and Spanish & Latin American Studies (MA)", "Legal Studies and Spanish & Latin American Studies (5 years) (MA)", "Liberal Arts and Sciences (BSc)", "Liberal Arts and Sciences (MA)", "Marine Biology (BSc)", "Mathematics (BSc)", "Mathematics (MA)", "Mathematics and Philosophy (MA)", "Mathematics and Physics (BSc)", "Mathematics and Spanish & Latin American Studies (MA)", "Mathematics and Spanish & Latin American Studies (MA)", "Mathematics with Gaelic (MA)", "Mathematics with Gaelic (BSc)", "Mechanical and Electrical Engineering (5 years) (MEng)", "Mechanical Engineering (MEng)", "Mechanical Engineering with Management (MEng)", "Mechanical Engineering with Subsea Technology (MEng)", "Medicine (MBChB)", "Modern Languages and Translation & Interpreting Studies with Overseas Placement (MA)", "Molecular and Cellular Biology (BSc)", "Music (BMus)", "Music and Philosophy (MA)", "Music and Spanish & Latin American Studies (MA)", "Music and Spanish & Latin American Studies (5 years) (MA)", "Music and Theology & Religion (MA)", "Music Education (BMus)", "Natural Philosophy (MA)", "Neuroscience with Psychology (BSc)", "Petroleum Engineering (BEng)", "Petroleum Engineering (MEng)", "Pharmacology (BSc)", "Philosophy (MA)", "Philosophy and Physics (MA)", "Philosophy and Politics (MA)", "Philosophy and Psychology (MA)", "Philosophy and Sociology (MA)", "Philosophy and Theology & Religion (MA)", "Philosophy, Politics and Economics (MA)", "Physical Sciences (BSc)", "Physics (BSc)", "Physics with Astrophysics (BSc)", "Physics with Geology (BSc)", "Physics with Philosophy (BSc)", "Physiology (BSc)", "Plant and Soil Science (BSc)", "Politics and International Relations (MA)", "Politics and Sociology (MA)", "Politics and Spanish & Latin American Studies (MA)", "Politics and Spanish & Latin American Studies (5 years) (MA)", "Politics and Theology & Religion (MA)", "Primary Education (MA)", "Psychology (BSc)", "Psychology (MA)", "Psychology and Sociology (MA)", "Psychology with Counselling Skills (MA)", "Psychology with French (MA)", "Psychology with French (BSc)", "Psychology with Gaelic (MA)", "Psychology with German (MA)", "Real Estate (MA)", "Scottish Studies (MA)", "Secondary Education with Biology (BA)", "Secondary Education with Chemistry (BA)", "Secondary Education with Computer Science (BA)", "Secondary Education with Physics (BA)", "Sociology (MA)", "Sociology and Spanish & Latin American Studies (MA)", "Sociology and Spanish & Latin American Studies (5 years) (MA)", "Sociology and Theology & Religion (MA)", "Spanish & Latin American Studies and Theology & Religion (MA)", "Spanish & Latin American Studies and Theology & Religion (5 years) (MA)", "Sports and Exercise Science (BSc)", "Theology (BTh)", "Theology (Online) (BTh)", "Theology and Religion (MA)", "Zoology (BSc)"
    ],
    "University of Glasgow": [
        "Accountancy & Finance (BAcc)", "Accounting & Mathematics (BSc)", "Accounting & Statistics (BSc)", "Aeronautical Engineering (BEng/MEng)", "Aeronautical Engineering (in partnership with Tianjin University) (BEng/MEng)", "Aerospace Engineering (joint degree with SIT)", "Aerospace Systems (BEng/MEng)", "Anatomy (BSc/MSci)", "Ancient History (MA)", "Archaeology (BSc/MA/MA(SocSci))", "Artificial Intelligence (BSc/MSci)", "Astronomy (BSc/MSci)", "Biochemistry (BSc/MSci)", "Biomedical Engineering (BEng/MEng)", "Biomedical Engineering (in partnership with KMITL) (BEng/MEng)", "Biomedical Engineering (in partnership with Tianjin University) (BEng/MEng)", "Business & Management (BSc/MA/LLB/MA(SocSci))", "Business Economics (MA(SocSci))", "Celtic Civilisation (MA)", "Celtic Studies (MA)", "Central & East European Studies (MA/MA(SocSci))", "Chemical Physics (BSc/MSci)", "Chemistry (BSc/MSci)", "Chemistry (in partnership with BUCT) (BSc/MSci)", "Chemistry with Medicinal Chemistry (BSc/MSci)", "Chemistry with Medicinal Chemistry with Work Placement (MSci)", "Chemistry with Work Placement (MSci)", "Childhood Practice (BA)", "Civil Engineering (BEng/MEng)", "Civil Engineering (dual degree programme with Universitas Indonesia) (BEng/Sarjana Teknik)", "Civil Engineering (joint degree with SIT)", "Civil Engineering with Architecture (BEng/MEng)", "Classics (Classical Civilisation) (MA/MA(SocSci))", "Common Law (LLB)", "Common Law (graduate entry) (LLB)", "Community Development (BA)", "Comparative Literature (MA)", "Computing Science (BSc/MA/MSci)", "Computing Science (faster route) (BSc/MSci)", "Computing Science (in partnership with BUiD) (BSc/MSci)", "Computing Science (joint degree with SIT)", "Creative Arts & Industries (MA)", "Dentistry (BDS)", "Design & Technology Education (MDTechEd)", "Digital Media & Information Studies (MA)", "Earth Science see: Environmental Geoscience (BSc)", "Economic & Social History (MA/LLB/MA(SocSci))", "Economics (BAcc/BSc/MA/MA(SocSci))", "Education with Primary Teaching Qualification (MEduc)", "Electronic & Software Engineering (BSc/BEng/MEng)", "Electronics & Electrical Engineering (BEng/MEng)", "Electronics & Electrical Engineering (dual degree programme with Universitas Indonesia) (BEng/Sarjana Teknik)", "Electronics & Electrical Engineering (in partnership with Tianjin University) (BEng/MEng)", "Electronics & Electrical Engineering with Communications (dual degree with UESTC)", "Electronics & Electrical Engineering with Information Engineering (dual degree with UESTC)", "Electronics & Electrical Engineering with Microelectronics (dual degree with UESTC)", "Electronics with Music (BEng/MEng)", "English Language & Linguistics (MA)", "English Literature (MA)", "Environmental Geoscience (BSc)", "Environmental Science & Sustainability (Dumfries campus) (BSc)", "Film & Television Studies (MA)", "Finance (BFin)", "Finance & Mathematics (BSc)", "Finance & Statistics (BSc)", "French (MA)", "Gaelic (MA)", "Genetics (BSc/MSci)", "Geography (BSc/MA/MA(SocSci))", "Geology (BSc)", "German (MA)", "Global Sustainable Development (Dumfries campus) (MA)", "Greek (MA)", "History (MA/MA(SocSci))", "History of Art (MA)", "Human Biology & Physiology (BSc/MSci)", "Immunology (BSc/MSci)", "International Relations (MA(SocSci))", "Italian (MA)", "Latin (MA)", "Law", "Liberal Arts (MA)", "Marine & Freshwater Biology (BSc/MSci)", "Material Chemistry with Work Placement (MSci)", "Materials Chemistry (BSc/MSci)", "Mathematics (BSc/MA/MA(SocSci)/MSci)", "Mathematics & Statistics (in partnership with ZUEL) (BSc)", "Mathematics (faster route) (BSc/MSci)", "Mathematics/Statistics (faster route) (BSc/MSci)", "Mechanical Design Engineering (BEng/MEng)", "Mechanical Engineering (BEng/MEng)", "Mechanical Engineering (joint degree with SIT)", "Mechanical Engineering with Aeronautics (BEng/MEng)", "Mechatronics (BEng/MEng)", "Medical Studies, Gateway to (CertHE)", "Medicine (MBChB)", "Microbiology (BSc/MSci)", "Molecular & Cellular Biology (BSc/MSci)", "Molecular & Cellular Biology (with Biotechnology) (BSc/MSci)", "Molecular & Cellular Biology (with Plant Science) (BSc/MSci)", "Music (MA)", "Music (BMus)", "Neuroscience (BSc/MSci)", "Nursing (BN)", "Nursing (jointly offered with SIT)", "Pharmacology (BSc/MSci)", "Philosophy (BSc/MA/MA(SocSci))", "Physics / Theoretical Physics (BSc/MSci)", "Physics / Theoretical Physics (faster route) (BSc/MSci)", "Physics with Astrophysics (BSc/MSci)", "Physics with Astrophysics (faster route) (BSc/MSci)", "Politics (MA/LLB/MA(SocSci))", "Portuguese (MA)", "Primary Education with Teaching Qualification (Dumfries campus) (MA)", "Primary Teaching see: Education with Primary Teaching Qualification (MEduc)", "Product Design Engineering (BEng/MEng)", "Psychology (BSc/MA/MA(SocSci))", "Public Policy see: Social & Public Policy (MA/LLB/MA(SocSci))", "Quantitative Methods (MA(SocSci))", "Robotics & Artificial Intelligence (BEng/MEng)", "Russian (MA)", "Scots Law (LLB)", "Scots Law (graduate entry) (LLB)", "Scottish History (MA/MA(SocSci))", "Scottish Literature (MA)", "Social & Public Policy (MA/LLB/MA(SocSci))", "Sociology (MA/MA(SocSci))", "Software Engineering (BSc/MSci)", "Software Engineering (faster route) (BSc/MSci)", "Software Engineering (Graduate Apprenticeship) (BSc)", "Software Engineering (in partnership with KMITL) (BSc/MSci)", "Spanish (MA)", "Sport & Exercise Science (BSc/MSci)", "Statistics (BSc/MSci)", "Statistics (Double Degree with the University of Bologna) (BSc/LSc)", "Statistics (faster route) (BSc/MSci)", "Statistics (in partnership with ZUEL) (BSc)", "Teaching", "Theatre Studies (MA)", "Theology & Religious Studies (BD/MA)", "Veterinary Biosciences (BSc/MSci)", "Veterinary Medicine & Surgery (BVMS)", "Zoology (BSc/MSci)"
    ],

    "Edingburgh": [
        "Accounting and Business (MA (Hons))", "Accounting and Finance (MA (Hons))", "Acoustics and Music Technology (BSc (Hons))", "Anatomy and Development (BSc (Hons))", "Ancient and Medieval History (MA (Hons))", "Ancient History and Greek (MA (Hons))", "Ancient History and Latin (MA (Hons))", "Ancient History (MA (Hons))", "Ancient Mediterranean Civilisations (MA (Hons))", "Animation (BA (Hons))", "Applied Mathematics (BSc (Hons))", "Applied Mathematics (MMath (Hons))", "Applied Sport Science (BSc (Hons))", "Arabic and Ancient Greek (MA (Hons))", "Arabic and Business (MA (Hons))", "Arabic and French (MA (Hons))", "Arabic and History (MA (Hons))", "Arabic and Persian (MA (Hons))", "Arabic and Politics (MA (Hons))", "Arabic and Social Anthropology (MA (Hons))", "Arabic and Spanish (MA (Hons))", "Arabic with Islamic and Middle Eastern Studies (MA (Hons))", "Archaeology and Ancient History (MA (Hons))", "Archaeology and Social Anthropology (MA (Hons))", "Archaeology (MA (Hons))", "Architectural History and Archaeology (MA (Hons))", "Architectural History and Heritage (MA (Hons))", "Architecture (BA/MA (Hons))", "Artificial Intelligence and Computer Science (BSc (Hons))", "Artificial Intelligence (BSc (Hons))", "Astrophysics (BSc (Hons))", "Astrophysics (MPhys)", "Biological Sciences (Biochemistry) (BSc (Hons))", "Biological Sciences (Biotechnology) (BSc (Hons))", "Biological Sciences (Cell Biology) (BSc (Hons))", "Biological Sciences (Development, Regeneration, and Stem Cells) (BSc (Hons))", "Biological Sciences (Ecology) (BSc (Hons))", "Biological Sciences (Evolutionary Biology) (BSc (Hons))", "Biological Sciences (Genetics) (BSc (Hons))", "Biological Sciences (Immunology) (BSc (Hons))", "Biological Sciences (Molecular Biology) (BSc (Hons))", "Biological Sciences (Molecular Genetics) (BSc (Hons))", "Biological Sciences (Plant Science) (BSc (Hons))", "Biological Sciences (Zoology) (BSc (Hons))", "Biological Sciences (BSc (Hons))", "Biological Sciences (MBiol)", "Biological Sciences with Management (BSc (Hons))", "Biomedical Informatics (based in China) (BSc (Hons))", "Biomedical Sciences (BSc (Hons))", "Business and Economics (MA (Hons))", "Business and Law (MA (Hons))", "Business Management (MA (Hons))", "Business with Decision Analytics (MA (Hons))", "Business with Enterprise and Innovation (MA (Hons))", "Business with Human Resource Management (MA (Hons))", "Business with Marketing (MA (Hons))", "Business with Strategic Economics (MA (Hons))", "Celtic and Archaeology (MA (Hons))", "Celtic and English Language (MA (Hons))", "Celtic and English Literature (MA (Hons))", "Celtic and French (MA (Hons))", "Celtic and Linguistics (MA (Hons))", "Celtic and Scandinavian Studies (MA (Hons))", "Celtic and Scottish History (MA (Hons))", "Celtic and Scottish Literature (MA (Hons))", "Celtic (MA (Hons))", "Chemical Engineering (BEng (Hons))", "Chemical Engineering (MEng (Hons))", "Chemical Physics (BSc (Hons))", "Chemical Physics (MChemPhys)", "Chemistry (BSc (Hons))", "Chemistry (MChem)", "Childhood Practice (BA (Ord))", "Chinese and French (MA (Hons))", "Chinese and German (MA (Hons))", "Chinese and History (MA (Hons))", "Chinese and Linguistics (MA (Hons))", "Chinese and Russian Studies (MA (Hons))", "Chinese and Spanish (MA (Hons))", "Chinese (MA (Hons))", "Civil Engineering (BEng (Hons))", "Civil Engineering (MEng (Hons))", "Classical Archaeology and Ancient History (MA (Hons))", "Classical Archaeology and Greek (MA (Hons))", "Classical Archaeology and Latin (MA (Hons))", "Classical Studies (MA (Hons))", "Classics and English Language (MA (Hons))", "Classics and Linguistics (MA (Hons))", "Classics (MA (Hons))", "Cognitive Science (Humanities) (MA (Hons))", "Computational Physics (BSc (Hons))", "Computational Physics (MPhys)", "Computer Science and Mathematics (BSc (Hons))", "Computer Science (BEng (Hons))", "Computer Science (BSc (Hons))", "Divinity - Graduate Entry (MDiv)", "Divinity (BD (Hons))", "Earth Science and Physical Geography (BSc (Hons))", "Earth Science and Physical Geography (MEarthSci)", "Earth Sciences (BSc (Hons))", "Earth Sciences (MEarthSci)", "Ecological and Environmental Sciences (BSc (Hons))", "Ecological and Environmental Sciences with Management (BSc (Hons))", "Economics and Accounting (MA (Hons))", "Economics and Mathematics (MA (Hons))", "Economics and Politics (MA (Hons))", "Economics and Statistics (MA (Hons))", "Economics (MA (Hons))", "Economics with Finance (MA (Hons))", "Economics with Management Science (MA (Hons))", "Electrical and Mechanical Engineering (BEng (Hons))", "Electrical and Mechanical Engineering (MEng (Hons))", "Electronics and Computer Science (BEng (Hons))", "Electronics and Computer Science (MEng (Hons))", "Electronics and Electrical Engineering (BEng (Hons))", "Electronics and Electrical Engineering (MEng (Hons))", "Engineering (BEng/MEng (Hons))", "English and Scottish Literature (MA (Hons))", "English Language and Literature (MA (Hons))", "English Language (MA (Hons))", "English Literature and Classics (MA (Hons))", "English Literature and History (MA (Hons))", "English Literature (MA (Hons))", "Environmental Geoscience (BSc (Hons))", "Fashion (BA (Hons))", "Film and Television (BA (Hons))", "Finance and Business (MA (Hons))", "Fine Art (5-year programme) (MA (Hons))", "Fine Art (BA (Hons))", "French and Business (MA (Hons))", "French and Classics (MA (Hons))", "French and English Language (MA (Hons))", "French and English Literature (MA (Hons))", "French and German (MA (Hons))", "French and History (MA (Hons))", "French and History of Art (MA (Hons))", "French and Italian (MA (Hons))", "French and Linguistics (MA (Hons))", "French and Philosophy (MA (Hons))", "French and Politics (MA (Hons))", "French and Portuguese (MA (Hons))", "French and Russian Studies (MA (Hons))", "French and Scandinavian Studies (MA (Hons))", "French and Social Policy (MA (Hons))", "French and Spanish (MA (Hons))", "French (MA (Hons))", "Geography (BSc (Hons))", "Geography (MA (Hons))", "Geophysics and Geology [Closed to new applicants] (BSc)", "Geophysics and Geology [Closed to new applicants] (MEarthPhys)", "Geophysics and Geology with Professional Placement [Closed to new applicants] (MEarthPhys)", "Geophysics and Meteorology [Closed to new applicants] (BSc)", "Geophysics and Meteorology [Closed to new applicants] (MEarthPhys)", "Geophysics and Meteorology with Professional Placement [Closed to new applicants] (MEarthPhys)", "Geophysics (BSc (Hons))", "Geophysics [Closed to new applicants] (MEarthPhys)", "Geophysics with Professional Placement [Closed to new applicants] (MEarthPhys)", "German and Business (MA (Hons))", "German and Classics (MA (Hons))", "German and English Language (MA (Hons))", "German and English Literature (MA (Hons))", "German and History (MA (Hons))", "German and History of Art (MA (Hons))", "German and Linguistics (MA (Hons))", "German and Philosophy (MA (Hons))", "German and Politics (MA (Hons))", "German and Portuguese (MA (Hons))", "German and Russian Studies (MA (Hons))", "German and Scandinavian Studies (MA (Hons))", "German and Social Policy (MA (Hons))", "German and Spanish (MA (Hons))", "German (MA (Hons))", "Global Law (LLB (Hons))", "Government, Policy and Society (MA (Hons))", "Government, Policy and Society with Quantitative Methods (MA (Hons))", "Graphic Design (BA (Hons))", "Greek Studies (MA (Hons))", "HCP-Med for Healthcare Professionals (MBChB)", "Health in Social Science (MA (Hons))", "History and Archaeology (MA (Hons))", "History and Classics (MA (Hons))", "History and Economics (MA (Hons))", "History and History of Art (MA (Hons))", "History and Politics (MA (Hons))", "History and Scottish History (MA (Hons))", "History (MA (Hons))", "History of Art and Architectural History (MA (Hons))", "History of Art and Chinese Studies (MA (Hons))", "History of Art and English Literature (MA (Hons))", "History of Art and History of Music (MA (Hons))", "History of Art and Scottish Literature (MA (Hons))", "History of Art (MA (Hons))", "Illustration (BA (Hons))", "Infectious Diseases (BSc (Hons))", "Informatics (5-year undergraduate Masters Programme) (MInf)", "Integrative Biomedical Sciences (based in China) (BSc (Hons))", "Interdisciplinary Futures (MA (Hons))", "Interior Design (BA (Hons))", "International Business (MA (Hons))", "International Business with Chinese (MA (Hons))", "International Business with French (MA (Hons))", "International Business with German (MA (Hons))", "International Business with Italian (MA (Hons))", "International Business with Japanese (MA (Hons))", "International Business with Spanish (MA (Hons))", "International Relations (MA (Hons))", "International Relations with Quantitative Methods (MA (Hons))", "Islamic Studies (MA (Hons))", "Italian and Classics (MA (Hons))", "Italian and English Language (MA (Hons))", "Italian and English Literature (MA (Hons))", "Italian and History (MA (Hons))", "Italian and History of Art (MA (Hons))", "Italian and Linguistics (MA (Hons))", "Italian and Philosophy (MA (Hons))", "Italian and Politics (MA (Hons))", "Italian and Spanish (MA (Hons))", "Italian (MA (Hons))", "Japanese and Linguistics (MA (Hons))", "Japanese (MA (Hons))", "Jewellery and Silversmithing (BA (Hons))", "Landscape Architecture (MA (Hons))", "Latin Studies (MA (Hons))", "Law (Graduate Entry) (LLB (Ord))", "Law (Ordinary and Honours) (LLB (Hons), LLB (Ord))", "Law and Accountancy (LLB (Hons))", "Law and Business (LLB (Hons))", "Law and Celtic (LLB (Hons))", "Law and French (LLB (Hons))", "Law and German (LLB (Hons))", "Law and History (LLB (Hons))", "Law and International Relations (LLB (Hons))", "Law and Politics (LLB (Hons))", "Law and Social Anthropology (LLB (Hons))", "Law and Social Policy (LLB (Hons))", "Law and Sociology (LLB (Hons))", "Law and Spanish (LLB (Hons))", "Learning in Communities (MA (Hons))", "Linguistics and English Language (MA (Hons))", "Linguistics and Social Anthropology (MA (Hons))", "Linguistics (MA (Hons))", "Mathematical Physics (BSc (Hons))", "Mathematical Physics (MPhys)", "Mathematics and Business (BSc (Hons))", "Mathematics and Music (BSc (Hons))", "Mathematics and Physics (BSc (Hons))", "Mathematics and Statistics (BSc (Hons))", "Mathematics (BSc (Hons))", "Mathematics (MA (Hons))", "Mathematics (MMath (Hons))", "MBChB Medicine (6-year programme) (MBChB)", "Mechanical Engineering (BEng (Hons))", "Mechanical Engineering (MEng (Hons))", "Medical Sciences [Closed to new applicants]", "Medicinal and Biological Chemistry (BSc (Hons))", "Medicinal and Biological Chemistry (MChem)", "Middle Eastern Studies (MA (Hons))", "Music (BMus)", "Neuroscience (BSc (Hons))", "Nursing Studies (BN)", "Performance Costume (BA (Hons))", "Persian and English Literature (MA (Hons))", "Persian and Middle Eastern Studies (MA (Hons))", "Persian and Social Anthropology (MA (Hons))", "Persian Studies (MA (Hons))", "Pharmacology (BSc (Hons))", "Philosophy and Economics (MA (Hons))", "Philosophy and English Language [Closed to new applicants]", "Philosophy and English Literature (MA (Hons))", "Philosophy and Greek [Closed to new applicants]", "Philosophy and Linguistics (MA (Hons))", "Philosophy and Mathematics (MA (Hons))", "Philosophy and Politics (MA (Hons))", "Philosophy and Psychology (MA (Hons))", "Philosophy and Scottish Literature (BA (Hons))", "Philosophy and Theology (MA (Hons))", "Philosophy (MA (Hons))", "Physical Education (MA (Hons))", "Physics (BSc (Hons))", "Physics (MPhys)", "Physics with a Year Abroad (MPhys)", "Physics with Meteorology (BSc (Hons))", "Physics with Meteorology (MPhys)", "Politics (MA (Hons))", "Politics with Quantitative Methods (MA (Hons))", "Politics, Philosophy and Economics (MA (Hons))", "Portuguese and English Language (MA (Hons))", "Portuguese and English Literature (MA (Hons))", "Portuguese and Linguistics (MA (Hons))", "Portuguese and Philosophy (MA (Hons))", "Portuguese and Scottish Literature (MA (Hons))", "Portuguese (MA (Hons))", "Primary Education with Gaelic (Fluent Speakers) (MA (Hons))", "Primary Education with Gaelic (Learners) (MA (Hons))", "Product Design (BA (Hons))", "Psychology and Business (MA (Hons))", "Psychology and Economics (MA (Hons))", "Psychology and Linguistics (MA (Hons))", "Psychology and Sociology (MA (Hons))", "Psychology (BSc (Hons))", "Religion, Culture and Society (MA (Hons))", "Religious Studies and English Literature (MA (Hons))", "Religious Studies and Scottish Literature (MA (Hons))", "Reproductive Biology (BSc (Hons))", "Russian Studies and Classics (MA (Hons))", "Russian Studies and English Language (MA (Hons))", "Russian Studies and English Literature (MA (Hons))", "Russian Studies and History (MA (Hons))", "Russian Studies and History of Art (MA (Hons))", "Russian Studies and Linguistics (MA (Hons))", "Russian Studies and Philosophy (MA (Hons))", "Russian Studies and Politics (MA (Hons))", "Russian Studies and Scandinavian Studies (MA (Hons))", "Russian Studies and Social Policy (MA (Hons))", "Russian Studies and Spanish (MA (Hons))", "Russian Studies (MA (Hons))", "Scandinavian Studies (Danish, Norwegian, Swedish) (MA (Hons))", "Scandinavian Studies and Classics (MA (Hons))", "Scandinavian Studies and English Language (MA (Hons))", "Scandinavian Studies and English Literature (MA (Hons))", "Scandinavian Studies and History (MA (Hons))", "Scandinavian Studies and Linguistics (MA (Hons))", "Scandinavian Studies and Philosophy (MA (Hons))", "Scandinavian Studies and Politics (MA (Hons))", "Scandinavian Studies and Social Policy (MA (Hons))", "Scandinavian Studies and Spanish (MA (Hons))", "Scottish Ethnology and Archaeology (MA (Hons))", "Scottish Ethnology and Celtic (MA (Hons))", "Scottish Ethnology and English Language (MA (Hons))", "Scottish Ethnology and English Literature (MA (Hons))", "Scottish Ethnology and Scandinavian Studies (MA (Hons))", "Scottish Ethnology and Scottish History (MA (Hons))", "Scottish Ethnology (MA (Hons))", "Scottish Literature and Classics (MA (Hons))", "Scottish Literature and History (MA (Hons))", "Scottish Literature and Scottish History (MA (Hons))", "Scottish Literature (MA (Hons))", "Scottish Studies (MA (Hons))", "Social Anthropology and Politics (MA (Hons))", "Social Anthropology and Social Policy (MA (Hons))", "Social Anthropology (MA (Hons))", "Social Anthropology with Development (MA (Hons))", "Social Policy and Economics (MA (Hons))", "Social Policy and Law (MA (Hons))", "Social Policy and Politics (MA (Hons))", "Social Policy and Sociology (MA (Hons))", "Social Policy with Quantitative Methods (MA (Hons))", "Social Work (BSc (Hons))", "Sociology and Politics (MA (Hons))", "Sociology and Social Anthropology (MA (Hons))", "Sociology (MA (Hons))", "Sociology with Quantitative Methods (MA (Hons))", "Software Engineering (BEng (Hons))", "Spanish and Business (MA (Hons))", "Spanish and Classics (MA (Hons))", "Spanish and English Literature (MA (Hons))", "Spanish and History (MA (Hons))", "Spanish and History of Art (MA (Hons))", "Spanish and Linguistics (MA (Hons))", "Spanish and Philosophy (MA (Hons))", "Spanish and Politics (MA (Hons))", "Spanish and Portuguese (MA (Hons))", "Spanish (MA (Hons))", "Sport Management (BSc (Hons))", "Structural and Fire Safety Engineering (BEng (Hons))", "Structural and Fire Safety Engineering (MEng (Hons))", "Structural Engineering with Architecture (BEng (Hons))", "Structural Engineering with Architecture (MEng (Hons))", "Sustainable Development (MA (Hons))", "Textiles (BA (Hons))", "Theology (MA (Hons))", "Theoretical Physics (BSc (Hons))", "Theoretical Physics (MPhys)", "Veterinary Medicine (5-year programme) (BVM&S)", "Veterinary Medicine (Graduate Entry Programme - 4-year programme) (BVM&S)"
]

};

// 在 universitiesData 定义之后添加URL生成函数
function generateMajorUrl(university, major) {
    const baseUrls = {
        "Loughborough University": "https://www.lboro.ac.uk/study/undergraduate/courses"
        // 可以继续添加其他大学的URL映射
    };

    if (!baseUrls[university]) return null;

    const lastParen = major.lastIndexOf('(');
    let majorName = lastParen !== -1 ? major.substring(0, lastParen).trim() : major;
    const degree = lastParen !== -1 ? major.substring(lastParen + 1, major.length - 1) : '';

    let urlSlug = majorName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');

    // 所有学位都添加到URL中
    if (degree) {
        const degreeSlug = degree.toLowerCase().replace(/\s+/g, '');
        urlSlug += `-${degreeSlug}`;
    }

    return `${baseUrls[university]}/${urlSlug}/`;
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
function init() {
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

    // 设置大学筛选器
    setupUniversityFilter();

    // 设置快速筛选按钮
    setupQuickFilters();

    setupHistoryActions();
    // 设置历史记录操作事件
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
}

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
    const rejectReason = reasonInput.value.trim();

    // 更新历史记录数据 - 增加拒绝次数
    majorSelectionHistory[uniName][major].rejectCount++;  // 增加这行
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
                    <span class="history-check-count">核查${item.totalCount}次</span>
                    ${item.isModified ? '<span class="modified-badge">已修改</span>' : ''}
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
