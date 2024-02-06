import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<div className=" w-full h-[93vh] flex items-center justify-center flex-col text-center relative overflow-hidden gap-6 ">
			<h1 className="text-7xl font-bold leading-snug">
				Cash on Delivery <br />
				The right way.
			</h1>
			<p className="text-[#90A3BF] text-xl leading-normal">
				The all in one platform for your cash on delivery business. <br /> 
				Manage your expenses & accounting with ease.
			</p>
			<div className="flex items-center justify-center gap-6 mb-[50px]">
				<Link href="/dashboard">
					<Button variant="default">Get started</Button>
				</Link>
			</div>

		</div>
	);
};

export default Header;
