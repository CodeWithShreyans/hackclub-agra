import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CountdownTimer } from "@/components/countdown-timer";

export default function DarkModeCounterspellHackathon() {
    // const [isHovered, setIsHovered] = useState(false);
    const targetDate = "2024-11-24T06:30:00Z"; // 12 PM IST on 24 November 2024

    return (
        <div className="min-h-screen bg-background">
            <div className="absolute left-0 top-0 w-[20%] md:w-40 2xl:w-64">
                <Link href="https://hackclub.com" target="_blank">
                    <Image
                        src="https://assets.hackclub.com/banners/2024.svg"
                        alt="Hack Club 2024"
                        width={200}
                        height={100}
                        className="absolute left-0 top-[10px] z-50 w-full border-0"
                    />
                </Link>
            </div>
            <div className="container mx-auto px-4 py-16">
                <header className="mb-10 flex flex-col items-center gap-4 text-center">
                    <h1 className="w-fit justify-center bg-gradient-to-r from-[#ec3750] to-[#ff8c37] bg-clip-text text-center text-6xl font-extrabold text-transparent">
                        Counterspell Agra
                    </h1>
                    <p className="text-2xl text-muted-foreground">
                        Hack Club&apos;s Beginner Friendly Game Jam
                        <br />
                        in the City of Taj
                    </p>
                    <Button size="lg" variant="secondary">
                        Register Now
                    </Button>
                </header>

                <section className="mb-20">
                    <h2 className="mb-6 text-center text-3xl font-bold">
                        Countdown to Hackathon
                    </h2>
                    <CountdownTimer targetDate={targetDate} />
                </section>

                <Separator className="my-10" />

                <section className="mb-20">
                    <h2 className="mb-6 text-3xl font-bold">FAQ</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Am I eligible to sign up?
                            </AccordionTrigger>
                            <AccordionContent>
                                {
                                    "If you're 18 or under, yes, we are so excited to see you!"
                                }
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                Does participating cost anything?
                            </AccordionTrigger>
                            <AccordionContent>
                                {
                                    "It's entirely free! We'll have meals, snacks, and beverages onsite at the hackathon, as well as swag, prizes, and fun mini-events."
                                }
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                What has Hack Club done before?
                            </AccordionTrigger>
                            <AccordionContent>
                                We have run multiple events around the world.
                                The summer of &apos;21, we{" "}
                                <Button
                                    variant="link"
                                    asChild
                                    className="p-0 text-[#ec3750]"
                                >
                                    <Link
                                        href="https://www.youtube.com/watch?v=2BID8_pGuqA"
                                        target="_blank"
                                    >
                                        chartered a train across America
                                    </Link>
                                </Button>{" "}
                                and ran the world&apos;s longest hackathon on
                                land. Last year, we ran an outdoors
                                do-it-yourself{" "}
                                <Button
                                    variant="link"
                                    asChild
                                    className="p-0 text-[#ec3750]"
                                >
                                    <Link
                                        href="https://www.youtube.com/watch?v=O1s5HqSqKi0"
                                        target="_blank"
                                    >
                                        camping adventure
                                    </Link>
                                </Button>{" "}
                                in Cabot, Vermont. This year, 30 of us{" "}
                                <Button
                                    variant="link"
                                    asChild
                                    className="p-0 text-[#ec3750]"
                                >
                                    <Link
                                        href="https://youtu.be/ufMUJ9D1fi8"
                                        target="_blank"
                                    >
                                        trecked the Pacific Crest Trail
                                    </Link>
                                </Button>{" "}
                                in California with PCBs we designed.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                I&apos;m not good at coding, can I join?
                            </AccordionTrigger>
                            <AccordionContent>
                                This hackathon is for hackers of all skill
                                levels! We&apos;ll have workshops and other
                                events so join us and let&apos;s learn together.
                                If you&apos;d like to start exploring some
                                introductory projects, check out{" "}
                                <Button
                                    variant="link"
                                    asChild
                                    className="p-0 text-[#ec3750]"
                                >
                                    <Link
                                        href="https://workshops.hackclub.com/"
                                        target="_blank"
                                    >
                                        Hack Club Workshops
                                    </Link>
                                </Button>{" "}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>
                                What can I make at Counterspell?
                            </AccordionTrigger>
                            <AccordionContent>
                                At Counterspell, we&apos;re building video games
                                of all kinds! The theme will be revealed at the
                                start of the hackathon.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>
                                What do I need to bring to Counterspell?
                            </AccordionTrigger>
                            <AccordionContent>
                                Your laptop, charger, and an open mind! If your
                                location is overnight, also bring toiletries,
                                and a sleeping bag.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger>
                                My parents are worried!
                            </AccordionTrigger>
                            <AccordionContent>
                                We&apos;re here to help! Ask them to reach out
                                to us at{" "}
                                <Button
                                    variant="link"
                                    asChild
                                    className="p-0 text-[#ec3750]"
                                >
                                    <Link href="mailto:shreyans@shreyans.sh">
                                        shreyans@shreyans.sh
                                    </Link>
                                </Button>{" "}
                                and we&apos;ll make sure to answer all their
                                questions!
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                <Separator className="my-10 bg-gray-700" />

                <section className="mb-20">
                    <h2 className="mb-6 text-3xl font-bold">Sponsors</h2>
                    <ul className="grid grid-cols-2 gap-4 text-lg md:grid-cols-4">
                        <li className="flex items-center">
                            <Users className="mr-2" /> TBA
                        </li>
                        <li className="flex items-center">
                            <Users className="mr-2" /> TBA
                        </li>
                        <li className="flex items-center">
                            <Users className="mr-2" /> TBA
                        </li>
                        <li className="flex items-center">
                            <Users className="mr-2" /> TBA
                        </li>
                    </ul>
                </section>

                <footer className="text-center">
                    <div className="mb-8 flex justify-center space-x-4">
                        <Button variant="outline" className="">
                            Contact Us
                        </Button>
                        <Button variant="outline" className="">
                            Sponsor Us
                        </Button>
                    </div>
                    <p className="text-sm">
                        &copy; 2024 Shreyans Jain. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
}
