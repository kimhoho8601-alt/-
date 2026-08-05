import { useState } from 'react';
export default function Meetings({ meetings, setMeetings }) {
  const [selected,setSelected]=useState(meetings[0]?.id); const [editing,setEditing]=useState(false); const current=meetings.find(m=>m.id===selected)||meetings[0];
  const [draft,setDraft]=useState(current);
  const beginEdit=()=>{setDraft(current);setEditing(true)};
  const save=()=>{setMeetings(meetings.map(m=>m.id===draft.id?draft:m));setEditing(false)};
  if(!current) return <div className="panel">회의록이 없습니다.</div>;
  return <div className="meeting-layout"><aside className="panel meeting-list"><h2>회의록 목록</h2>{meetings.map(m=><button key={m.id} className={m.id===selected?'active':''} onClick={()=>setSelected(m.id)}><strong>{m.week}</strong><span>{m.title}<small>{m.date}</small></span></button>)}</aside>
  <section className="panel meeting-detail"><div className="panel-head"><div><span className="pill">{current.week}</span><h2>{current.title}</h2><p>{current.date} · 작성자 {current.author}</p></div><button onClick={editing?save:beginEdit}>{editing?'저장':'편집'}</button></div>
  {editing?<div className="editor"><input value={draft.title} onChange={e=>setDraft({...draft,title:e.target.value})}/><textarea value={draft.topics.join('\n')} onChange={e=>setDraft({...draft,topics:e.target.value.split('\n')})}/><textarea value={draft.decisions.join('\n')} onChange={e=>setDraft({...draft,decisions:e.target.value.split('\n')})}/><textarea value={draft.next.join('\n')} onChange={e=>setDraft({...draft,next:e.target.value.split('\n')})}/></div>:<><h3>참석자</h3><p>{current.attendees.join(', ')}</p><h3>주요 논의 내용</h3><ul>{current.topics.map(x=><li key={x}>{x}</li>)}</ul><h3>결정 사항</h3><ul>{current.decisions.map(x=><li key={x}>{x}</li>)}</ul><h3>다음 주 계획</h3><ul>{current.next.map(x=><li key={x}>{x}</li>)}</ul></>}</section></div>
}
