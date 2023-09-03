import { PC_Builder_Logo } from "@/src/Assets";
import RootLayout from "@/src/Layouts/RootLayout";
import Head from "next/head";

const PcBuilderPage = () => {
    return (
        <section>
            <Head>
                <title>The PC REPAIR TECH</title>
                <meta
                    name="description"
                    content="The PC REPAIR TECH is a computer repair service in the greater"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={PC_Builder_Logo} />
            </Head>
            <h1>PC Builder</h1>
        </section>
    );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  