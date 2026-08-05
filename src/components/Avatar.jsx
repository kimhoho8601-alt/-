export default function Avatar({ member, size = 38 }) {
  return <div className="avatar" style={{ width: size, height: size, fontSize: size * 0.55 }}>{member?.avatar || '🙂'}</div>;
}
