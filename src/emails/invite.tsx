import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from 'react';
import tailwindConfig from '#src/emails/tailwind.config';

const CDN_URL = 'https://react-email-demo-n5mvmeil1-resend.vercel.app/static'

export interface ProjectInviteEmailProps {
    userFirstName: string;
    userLastName: string;
    userImage: string;
    invitedByUsername: string;
    invitedByEmail: string;
    projectName: string;
    teamImage: string;
    inviteLink: string;
    inviteFromIp: string;
    inviteFromLocation: string;
    productName: string;
}

/** TODO: remove unneeded props on this email */
export const ProjectInviteEmail = ({
                                       userFirstName = 'Jane',
                                       userLastName = 'Doe',
                                       userImage = `${CDN_URL}/vercel-user.png`,
                                       invitedByUsername = 'John Doe',
                                       invitedByEmail = 'user@example.com',
                                       projectName = 'ExampleProject',
                                       teamImage = `${CDN_URL}/vercel-team.png`,
                                       inviteLink = 'https://example.com/projects/invite/foo',
                                       inviteFromIp = '204.13.186.218',
                                       inviteFromLocation = 'Anywhere, USA',
                                       productName = 'Vercel',
                                   }: Partial<ProjectInviteEmailProps>) => {
    const previewText = `Join ${invitedByUsername} on Vercel`;

    return (
        <Html>
            <Head/>
            <Preview>{previewText}</Preview>
            <Tailwind config={tailwindConfig}>
                <Body className="bg-background my-auto mx-auto font-sans">
                    <Container
                        className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src={`${CDN_URL}/logos/mark-blue.png`}
                                width="50"
                                height="50"
                                alt="Vercel"
                                className="my-0 mx-auto object-contain"
                            />
                        </Section>

                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-8 mx-0">
                            Join <strong>{projectName}</strong> on{' '}
                            <strong>{productName}</strong>
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Hello {userFirstName},
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>{invitedByUsername}</strong> (
                            <Link
                                href={`mailto:${invitedByEmail}`}
                                className="text-blue-600 no-underline"
                            >
                                {invitedByEmail}
                            </Link>
                            ) has invited you to the <strong>{projectName}</strong> project on{' '}
                            <strong>{productName}</strong>.
                        </Text>

                        <Section>
                            <Row>
                                <Column align="right">
                                    <Img
                                        className="rounded-full"
                                        src={userImage}
                                        width="64"
                                        height="64"
                                    />
                                </Column>
                                <Column align="center">
                                    <Img
                                        src={`${CDN_URL}/email/vercel-arrow.png`}
                                        width="12"
                                        height="9"
                                        alt="invited you to"
                                    />
                                </Column>
                                <Column align="left">
                                    <Img
                                        className="rounded-full"
                                        src={teamImage}
                                        width="64"
                                        height="64"
                                    />
                                </Column>
                            </Row>
                        </Section>
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                style={{padding: '12px 20px'}}
                                className="px-[20px] py-[12px] bg-primary rounded text-primary-foreground text-[12px] font-semibold no-underline text-center"
                                href={inviteLink}
                            >
                                Join the project
                            </Button>
                        </Section>
                        <Text className="text-black text-[14px] leading-[24px]">
                            or copy and paste this URL into your browser:{' '}
                            <Link href={inviteLink} className="text-blue-600 no-underline">
                                {inviteLink}
                            </Link>
                        </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full"/>
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            This invitation was intended for{' '}
                            <span className="text-black">
                {userFirstName} {userLastName}
              </span>
                            . This invite was sent from{' '}
                            <span className="text-black">{inviteFromIp}</span> located in{' '}
                            <span className="text-black">{inviteFromLocation}</span>. If you
                            were not expecting this invitation, you can ignore this email. If
                            you are concerned about your account's safety, please reply to
                            this email to get in touch with us.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ProjectInviteEmail;
