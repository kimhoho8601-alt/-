export const members = [
  { id: 1, name: '김철수', role: '관리자', avatar: './avatars/bear.svg' },
  { id: 2, name: '이영희', role: '팀원', avatar: './avatars/rabbit.svg' },
  { id: 3, name: '박민수', role: '팀원', avatar: './avatars/panda.svg' },
  { id: 4, name: '최지은', role: '팀원', avatar: './avatars/cat.svg' },
  { id: 5, name: '김서연', role: '팀원', avatar: './avatars/fox.svg' },
  { id: 6, name: '정우진', role: '팀원', avatar: './avatars/dog.svg' },
];

export const initialCategories = ['교육 기획', '홍보', '프로그램 운영', '회계', '자원봉사 관리', 'IT / 시스템'];
export const initialTasks = [
  { id: 1, title: '리더십 워크숍 자료 준비', assignee: '김철수', category: '교육 기획', priority: '높음', due: '2026-08-08', status: '진행 중', progress: 70 },
  { id: 2, title: '후원자 대상 뉴스레터 발송', assignee: '이영희', category: '홍보', priority: '보통', due: '2026-08-10', status: '진행 중', progress: 40 },
  { id: 3, title: '아동 프로그램 만족도 조사', assignee: '박민수', category: '프로그램 운영', priority: '높음', due: '2026-08-07', status: '검토/대기', progress: 80 },
  { id: 4, title: '회계 보고서 작성', assignee: '최지은', category: '회계', priority: '보통', due: '2026-08-12', status: '진행 중', progress: 30 },
];
export const initialMeetings = [{
  id: 1, week: '2026-W32', date: '2026-08-04', title: '주간 회의', author: '김철수',
  attendees: ['김철수','이영희','박민수','최지은','김서연'],
  topics: ['리더십 워크숍 자료 준비 현황 공유','후원자 대상 뉴스레터 발송 계획 논의','만족도 조사 진행 상황 점검'],
  decisions: ['워크숍 발표자료 초안 1차 검토','뉴스레터 8월호 발송'],
  next: ['발표자료 최종본 확정','뉴스레터 반응 분석']
}];
export const initialEvents = [
  { id: 1, title: '팀 회의', date: '2026-08-05', source: '내부' },
  { id: 2, title: '리더십 워크숍', date: '2026-08-07', source: '내부' },
];
