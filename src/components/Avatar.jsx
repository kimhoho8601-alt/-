export default function Avatar({ member, size = 38 }) {
  const src = member?.avatar || './avatars/bear.svg';
  return <img className="avatar" src={src} alt={`${member?.name || '사용자'} 캐릭터`} style={{ width: size, height: size }} />;
}
