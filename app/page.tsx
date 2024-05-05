import { Heading } from "@/components/ui/heading";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";

export default async function Home() {
    const Session = await getServerSession(authOptions);
    console.log(Session)

    return (
        <div className="h-[500dvh]">
            { Session?.user && 
                <Heading 
                    title={`Yeniden Hoş Geldin ${Session?.user?.username}`}
                    description=""
                /> 
            }
        </div>
    );
};