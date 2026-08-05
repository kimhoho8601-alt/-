import { useState } from 'react';
export default function Calendar({ events, setEvents }) {
  const [form,setForm]=useState({title:'',date:'2026-08-05',source:'내부'});
  const days=Array.from({length:31},(_,i)=>i+1);
  const save=e=>{e.preventDefault();if(!form.title)return;setEvents([...events,{...form,id:Date.now()}]);setForm({...form,title:''})};
  return <div className="split"><section className="panel wide"><div className="panel-head"><div><h2>2026년 8월</h2><p>내부 일정과 향후 Google Calendar 일정을 함께 표시합니다.</p></div></div><div className="calendar-grid">{['일','월','화','수','목','금','토'].map(d=><b key={d}>{d}</b>)}{Array.from({length:6}).map((_,i)=><span key={'e'+i}/>) }{days.map(d=>{const date=`2026-08-${String(d).padStart(2,'0')}`;return <div className="calendar-day" key={d}><strong>{d}</strong>{events.filter(e=>e.date===date).map(e=><span className="event-chip" key={e.id}>{e.title}</span>)}</div>})}</div></section>
  <section className="panel"><h2>일정 등록</h2><form className="form-grid" onSubmit={save}><input placeholder="일정명" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/><input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/><select value={form.source} onChange={e=>setForm({...form,source:e.target.value})}><option>내부</option><option>Google 예정</option></select><label className="check"><input type="checkbox" disabled/> Google Calendar에도 등록 (추후 연동)</label><button className="primary">일정 저장</button></form></section></div>
}
