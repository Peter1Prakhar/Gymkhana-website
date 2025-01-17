import React from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const GymkhanaTeams = () => {

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto space-y-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">
                            Team Technical
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Technical Committee Team
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            The IIITV Gymkhana is led by dedicated student representatives across various teams.
                        </p>
                    </div>
                </div>

                <Tabs defaultValue="leads" className="mt-8">
                    <TabsList className="flex flex-wrap justify-center gap-4 mb-6 bg-muted">
                        <TabsTrigger value="leads">Committee Leads</TabsTrigger>
                        <TabsTrigger value="core">Core Team</TabsTrigger>
                        <TabsTrigger value="trainee">Trainees</TabsTrigger>
                    </TabsList>

                    <TabsContent value="leads">
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <TeamMember
                                name="John Doe"
                                role="Gymkhana President"
                                imageUrl="/placeholder.svg"
                                link = "mailto:202351030@iiitvadodara.ac.in"
                            />
                            <TeamMember
                                name="Sarah Adams"
                                role="General Secretary"
                                imageUrl="/placeholder.svg"
                                link = "mailto:202351030@iiitvadodara.ac.in"
                            />
                        </div>
                        
                    </TabsContent>

                    <TabsContent value="core">
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <TeamMember
                                name="Emily Chen"
                                role="Events Coordinator"
                                imageUrl="/placeholder.svg"
                                link = "mailto:202351030@iiitvadodara.ac.in"
                            />
                            <TeamMember
                                name="Mia Chinaar"
                                role="Sponsorship Lead"
                                imageUrl="/placeholder.svg"
                                link = "mailto:202351030@iiitvadodara.ac.in"
                            />
                        </div>
                    </TabsContent>

                    <TabsContent value="trainee">
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <TeamMember
                                name="Emily Chen"
                                role="Events Coordinator"
                                imageUrl="/placeholder.svg"
                                link = "mailto:202351030@iiitvadodara.ac.in"
                            />
                            <TeamMember
                                name="Los Engela"
                                role="Sponsorship Lead"
                                imageUrl="/placeholder.svg"
                                link = "mailto:202351030@iiitvadodara.ac.in"
                            />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

const TeamMember = ({ name, role, imageUrl, link }) => {

    const handleRedirect = (url) => {
        window.location.href = url;
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={imageUrl}
                width="550"
                height="310"
                alt="Team Member"
                className="w-full h-[300px] object-cover object-center"
            />
            <div className="p-6 space-y-2">
                <h4 className="text-lg font-bold">{name}</h4>
                <p className="text-muted-foreground">{role}</p>
                <Button variant="outline" className="w-full" data-sex="member-mail" onClick={() => {handleRedirect(link);}}>Email</Button>
            </div>
        </div>
    );
};

export default GymkhanaTeams;
