import { UserAgent } from "@/views/userAgent";
import { getUserAgent } from "@/api-components/getUserAgent";

const UserAgentRoot = async () => {
  const useragent = await getUserAgent();
  return <UserAgent useragent={useragent} />;
};

export default UserAgentRoot;
