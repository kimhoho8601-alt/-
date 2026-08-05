import { LayoutDashboard, ListChecks, NotebookTabs, CalendarDays, Settings } from 'lucide-react';

const items = [
  ['dashboard','대시보드',LayoutDashboard],
  ['tasks','업무 관리',ListChecks],
  ['meetings','주간 회의록',NotebookTabs],
  ['calendar','통합 캘린더',CalendarDays],
  ['admin','관리자',Settings],
];

export default function Layout({ page, setPage, children }) {
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand">TEAM<span>FLOW</span></div>
      <nav>{items.map(([id,label,Icon]) => <button key={id} className={page===id?'active':''} onClick={()=>setPage(id)}><Icon size={20}/><span>{label}</span></button>)}</nav>
    </aside>
    <main className="main-area">
      <header className="topbar"><div><h1>{items.find(i=>i[0]===page)?.[1]}</h1><p>팀의 업무와 회의 정보를 한 곳에서 관리합니다.</p></div><div className="user-chip"><span>🐻</span><div><strong>김철수</strong><small>관리자</small></div></div></header>
      {children}
    </main>
  </div>
}
