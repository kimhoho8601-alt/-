import { useState } from 'react';
import Avatar from '../components/Avatar';
export default function Admin({ categories,setCategories,members }) {
  const [name,setName]=useState('');
  return <div className="split"><section className="panel"><h2>업무 카테고리</h2><form className="inline-form" onSubmit={e=>{e.preventDefault();if(name&&!categories.includes(name)){setCategories([...categories,name]);setName('')}}}><input value={name} onChange={e=>setName(e.target.value)} placeholder="새 카테고리"/><button className="primary">추가</button></form>{categories.map(c=><div className="category-row" key={c}><span>{c}</span><button onClick={()=>setCategories(categories.filter(x=>x!==c))}>삭제</button></div>)}</section>
  <section className="panel"><h2>팀원 및 권한</h2>{members.map(m=><div className="member-line" key={m.id}><span className="person"><Avatar member={m}/><div><strong>{m.name}</strong><small>{m.role}</small></div></span><span className="pill">{m.role}</span></div>)}</section>
  <section className="panel wide"><h2>연동 준비</h2><div className="integration-card"><strong>Supabase</strong><p>인증, 데이터베이스, 실시간 동기화를 추후 연결합니다.</p><button disabled>연결 예정</button></div><div className="integration-card"><strong>Google Calendar</strong><p>가져오기와 내보내기 양방향 동기화를 추후 연결합니다.</p><button disabled>연결 예정</button></div></section></div>
}
