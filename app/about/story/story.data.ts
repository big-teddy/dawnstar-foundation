
export interface ContentBlock {
    type: 'paragraph' | 'heading' | 'list';
    text: string | string[];
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    roleEn: string;
    shortDesc: string;
    fullDesc: string;
    imageColor: string;
    details: ContentBlock[];
    quote?: { text: string; author?: string };
}

export const founder: TeamMember = {
    id: 'founder',
    name: '김성현',
    role: '창업자',
    roleEn: 'Founder',
    shortDesc: '1세대 홈스쿨러 출신의 교육 혁신가. 교육의 본질을 탐구해 왔습니다.',
    fullDesc: '1세대 홈스쿨러 출신으로, 제도권 교육과 대안 교육을 모두 경험하며 "진정한 배움이란 무엇인가?"라는 질문을 끊임없이 던져왔습니다. 펜실베이니아 주립대(PSU) 재학 중 비영리 법인 이사 및 창업가로 활동하며 교육 불평등 해소와 에듀테크의 가능성을 현장에서 확인했습니다.',
    imageColor: 'bg-indigo-100 text-indigo-500',
    quote: {
        text: "제가 걸어온 길이 정답은 아닙니다. 다만, 다른 길도 있다는 것을 보여주고 싶습니다. 모든 아이가 자신만의 길을 찾을 수 있도록.",
        author: "김성현 Founder"
    },
    details: [
        { type: 'heading', text: '주요 이력' },
        {
            type: 'list', text: [
                'Pennsylvania State University (PSU) 재학',
                '前 비영리 교육 법인 이사',
                '다수의 에듀테크 프로젝트 리드',
                '대한민국 인재상 수상 (교육 부문)'
            ]
        }
    ]
};

export const boardMembers: TeamMember[] = [
    {
        id: 'board-advisors',
        name: '이사 및 자문단',
        role: 'Board & Advisors',
        roleEn: 'Board & Advisors',
        shortDesc: '각 분야의 리더들이 모여 기술적 완성도와 교육적 윤리를 책임집니다.',
        fullDesc: '새벽별 파운데이션의 이사 및 자문단은 교육학, AI 기술, 법률, 윤리 등 각 분야의 최고 전문가들로 구성되어 있습니다. 이들은 재단의 방향성을 점검하고, 우리가 만드는 기술과 콘텐츠가 교육의 본질에서 벗어나지 않도록 끊임없이 조언하고 감시합니다.',
        imageColor: 'bg-slate-100 text-slate-500',
        details: [
            { type: 'heading', text: '구성' },
            {
                type: 'list', text: [
                    '교육학 박사 및 현직 교수진',
                    'AI/Tech 기업 CTO 출신 기술 자문',
                    '현직 교사 및 장학사 (현장 자문)',
                    '법률 및 윤리 위원회'
                ]
            }
        ]
    }
];

export const teamMembers: TeamMember[] = [
    {
        id: 'team-dawnstar',
        name: '팀 새벽별',
        role: 'Team DawnStar',
        roleEn: 'Team DawnStar',
        shortDesc: "개발자, 기획자, 디자이너가 '아이들의 미래'를 위해 모였습니다.",
        fullDesc: '우리는 단순한 직장 동료가 아닙니다. "교육을 통해 세상을 바꾼다"는 공통된 미션을 가진 러닝 메이트입니다. 구글, 네이버 등 유수 IT 기업 출신의 개발자와 혁신 학교 출신의 교육 기획자, 그리고 따뜻한 감성을 가진 디자이너가 원팀(One-Team)으로 움직입니다.',
        imageColor: 'bg-slate-100 text-slate-500',
        quote: {
            text: "기술은 차갑지만, 우리가 만드는 교육은 따뜻해야 합니다.",
        },
        details: [
            { type: 'heading', text: 'Core Values' },
            {
                type: 'list', text: [
                    'Student First: 모든 결정의 기준은 아이들입니다.',
                    'Be Real: 화려한 포장보다 본질적인 변화를 추구합니다.',
                    'Move Fast: 빠르게 시도하고 실패에서 배웁니다.'
                ]
            }
        ]
    }
];

export const partners: TeamMember[] = [
    {
        id: 'partners',
        name: '파트너',
        role: 'Partners',
        roleEn: 'Partners',
        shortDesc: '새벽별의 여정에 함께하는 든든한 기관과 기업들입니다.',
        fullDesc: '혼자서는 빨리 갈 수 있지만, 함께라면 멀리 갈 수 있습니다. 새벽별 파운데이션은 뜻을 함께하는 다양한 기관, 기업, 학교와 파트너십을 맺고 교육 생태계의 긍정적인 변화를 만들어가고 있습니다.',
        imageColor: 'bg-slate-100 text-slate-500',
        details: [
            { type: 'heading', text: '주요 파트너 유형' },
            {
                type: 'list', text: [
                    '공교육 기관 및 혁신 학교',
                    '비영리 교육 재단',
                    'EdTech 스타트업',
                    'CSR 협력 기업'
                ]
            },
            { type: 'paragraph', text: '* 파트너십 문의는 contact@dawnstar.org 로 부탁드립니다.' }
        ]
    }
];

export const allMembers = [founder, ...boardMembers, ...teamMembers, ...partners];
