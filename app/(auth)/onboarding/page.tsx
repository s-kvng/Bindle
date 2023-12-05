import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";


async function Page() {
    const user = await currentUser();
    
    const userInfo = {};

    const userData = {
        id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.firstName ?? "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user.imageUrl,
    }
    return(
        <main className="flex flex-col mx-auto max-w-3xl justify-start px-10 py-10">
            <h1 className=" head-text ">OnBoarding</h1>
            <p className="text-base-regular mt-3 text-light-1">Complete your profile now to use bundle</p>

            <section className="mt-9 p-10 bg-dark-2">
                <AccountProfile  user={ userData } btnTitle="continue" />
            </section>
        </main>
    )
}

export default Page;