import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Meetings from './pages/Meetings';
import Calendar from './pages/Calendar';
import Admin from './pages/Admin';
import { members, initialCategories, initialTasks, initialMeetings, initialEvents } from './data/seed';

const useStored=(key,initial)=>{const [value,setValue]=useState(()=>JSON.parse(localStorage.getItem(key)||'null')||initial);useEffect(()=>localStorage.setItem(key,JSON.stringify(value)),[key,value]);return [value,setValue]};

export default function App(){
  const [page,setPage]=useState('dashboard');
  const [tasks,setTasks]=useStored('tf_tasks',initialTasks);
  const [meetings,setMeetings]=useStored('tf_meetings',initialMeetings);
  const [events,setEvents]=useStored('tf_events',initialEvents);
  const [categories,setCategories]=useStored('tf_categories',initialCategories);
  const props={tasks,setTasks,meetings,setMeetings,events,setEvents,categories,setCategories,members};
  return <Layout page={page} setPage={setPage}>
    {page==='dashboard'&&<Dashboard {...props}/>} {page==='tasks'&&<Tasks {...props}/>} {page==='meetings'&&<Meetings {...props}/>} {page==='calendar'&&<Calendar {...props}/>} {page==='admin'&&<Admin {...props}/>} 
  </Layout>
}
