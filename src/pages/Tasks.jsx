import { useState } from 'react';
import Avatar from '../components/Avatar';
export default function Tasks({ tasks, setTasks, categories, members }) {
  const empty={title:'',assignee:members[0].name,category:categories[0],priority:'보통',due:'',status:'진행 중',progress:0};
  const [form,setForm]=useState(empty); const [editId,setEditId]=useState(null);
  const save=e=>{e.preventDefault(); if(!form.title||!form.due)return; if(editId){setTasks(tasks.map(t=>t.id===editId?{...form,id:editId}:t))}else setTasks([{...form,id:Date.now()},...tasks]); setForm(empty);setEditId(null)};
  return <div className="split"><section className="panel"><h2>{editId?'업무 수정':'새 업무 등록'}</h2><form className="form-grid" onSubmit={save}>
    <input placeholder="업무명" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/>
    <select value={form.assignee} onChange={e=>setForm({...form,assignee:e.target.value})}>{members.map(m=><option key={m.id}>{m.name}</option>)}</select>
    <select value={form.category} onChange={e=>setForm({...form,category:e.target.value})}>{categories.map(c=><option key={c}>{c}</option>)}</select>
    <input type="date" value={form.due} onChange={e=>setForm({...form,due:e.target.value})}/>
    <select value={form.status} onChange={e=>setForm({...form,status:e.target.value})}><option>진행 중</option><option>검토/대기</option><option>완료</option></select>
    <input type="number" min="0" max="100" value={form.progress} onChange={e=>setForm({...form,progress:Number(e.target.value)})}/>
    <button className="primary">{editId?'수정 저장':'업무 추가'}</button>
  </form></section>
  <section className="panel wide"><h2>업무 목록</h2>{tasks.map(t=>{const m=members.find(x=>x.name===t.assignee);return <div className="work-card" key={t.id}><div className="person"><Avatar member={m}/><div><strong>{t.title}</strong><small>{t.assignee} · {t.category} · {t.due}</small></div></div><div className="actions"><button onClick={()=>{setEditId(t.id);setForm(t)}}>편집</button><button onClick={()=>setTasks(tasks.filter(x=>x.id!==t.id))}>삭제</button></div></div>})}</section></div>
}
