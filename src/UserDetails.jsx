import { Button } from "./Button";
export const UserDetails = ({
  name,
  isOnline,
  hideOffline,
  isPremium,
  isNew,
  role,
}) => {
  if (!isOnline && hideOffline) {
    return null;
  }
  let roleBadge = null;
  if (role === "admin") {
    roleBadge = <span>🛡️Admin</span>;
  } else if (role === "moderator") {
    roleBadge = <span>"👮Moderator"</span>;
  } else if (role === "vip") {
    roleBadge = <span>💎VIP</span>;
  }
  return (
    <div>
      <h2>
        {name}
        {isPremium && <span>⭐</span>}
        {isNew && <span>👋</span>}
        {roleBadge}
      </h2>

      <p>{isOnline ? "🟢 Online" : "🔴 Offline"}</p>
      <p>{isOnline ? "Available for chat" : "Not Available"}</p>
      <p>
        {isOnline ? (
          <Button text="Send Message" />
        ) : (
          <small>Check back later</small>
        )}
      </p>
    </div>
  );
};
