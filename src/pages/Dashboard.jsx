import Avatar from '../components/Avatar';
export default function Dashboard({ tasks, members, meetings }) {
  const count = s => tasks.filter(t=>t.status===s).length;
  return <div className="page-grid">
    <section className="stats-row">
      {[['전체 업무',tasks.length],['진행 중',count('진행 중')],['검토/대기',count('검토/대기')],['완료',count('완료')]].map(([l,v])=><div className="stat-card" key={l}><span>{l}</span><strong>{v}건</strong></div>)}
    </section>
    <section className="panel wide"><div className="panel-head"><div><h2>팀 전체 업무</h2><p>모든 팀원이 입력한 업무를 한눈에 확인합니다.</p></div></div>
      <div className="task-table"><div className="task-row head"><span>업무</span><span>담당자</span><span>분류</span><span>마감일</span><span>진행률</span></div>
      {tasks.map(t=>{const m=members.find(x=>x.name===t.assignee);return <div className="task-row" key={t.id}><strong>{t.title}</strong><span className="person"><Avatar member={m} size={30}/>{t.assignee}</span><span>{t.category}</span><span>{t.due}</span><span><div className="bar"><i style={{width:`${t.progress}%`}}/></div>{t.progress}%</span></div>})}</div>
    </section>
    <section className="panel"><h2>팀원별 현황</h2>{members.map(m=><div className="member-line" key={m.id}><span className="person"><Avatar member={m} size={34}/><div><strong>{m.name}</strong><small>{m.role}</small></div></span><b>{tasks.filter(t=>t.assignee===m.name).length}건</b></div>)}</section>
    <section className="panel"><h2>최근 회의록</h2>{meetings.map(m=><div className="list-card" key={m.id}><strong>{m.title}</strong><span>{m.date} · {m.author}</span></div>)}</section>
  </div>
}
