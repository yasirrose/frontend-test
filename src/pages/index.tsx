import React from "react";
import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";
import { useEffect } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton, } from "@material-tailwind/react";
 

export default function Home() {

  const [isActive1, setIsActive] = useState(false);
  const handleClick1 = () => {
    setIsActive(current => !current);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  };
  const [isActive2, setIsActive2] = useState(false);
  const handleClick2 = () => {
    setIsActive2(current => !current);
    setIsActive(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  };
  const [isActive3, setIsActive3] = useState(false);
  const handleClick3 = () => {
    setIsActive3(current => !current);
    setIsActive(false);
    setIsActive2(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  };
  const [isActive4, setIsActive4] = useState(false);
  const handleClick4 = () => {
    setIsActive4(current => !current);
    setIsActive(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive5(false);
    setIsActive6(false);
  };
  const [isActive5, setIsActive5] = useState(false);
  const handleClick5 = () => {
    setIsActive5(current => !current);
    setIsActive(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive6(false); 
  };
  const [isActive6, setIsActive6] = useState(false);
  const handleClick6 = () => {
    setIsActive6(current => !current);
    setIsActive(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
  };


  const [open, setOpen] = useState(0);
  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-white text-lg font-bold">
        Genesis pass
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-white text-lg font-bold">
        services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-white text-lg font-bold">
        nft
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-white text-lg font-bold">
        faq
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="text-cLight"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-white text-lg font-bold text-text-cLight">
        Pratform <span className="w-auto ml-auto">Coming Soon </span>
        </a>
      </Typography>
    </ul>
  );
  return (
    <>
      <header className="px-3 md:px-9 bg-black">
        {/* <div className="flex items-center">
        <div className="flex-1 w-50">
        <img src="images/logo.png" alt="logo.png" />  
        </div>
        <div className="flex-1 w-50 text-right font-sans">
          <h3 className="font-sans font-normal text-white text-base uppercase">Logo</h3>
        </div>
      </div> */}
        <Navbar className="w-full bg-transparent rounded-none border-0 p-0 max-w-full">
          <div className="mx-auto flex items-center justify-between text-blue-gray-900 w-full">
            <Typography
              as="a"
              href="#"
              variant="small"
              className="mr-4 cursor-pointer py-1.5 font-normal"
            >
              <img src="images/logo.png" className="hidden sm:block" alt="logo.png" />
              <img src="images/m_logo.png" className="block sm:hidden" alt="logo.png" />
            </Typography>
            {/* <div className="hidden lg:block">{navList}</div> */}
            <div className="text-right font-sans hidden lg:inline-block">
              <h3 className="font-sans font-normal text-white text-base uppercase">Logo</h3>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent text-white focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <MobileNav open={openNav}>
            <div className="container mx-auto h-screen pt-64">
              {navList}
              {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
                <span>Buy Now</span>
              </Button> */}
            </div>
          </MobileNav>
        </Navbar>
      </header>
      <div className="pt-20 pb-40 bg-regal-blue px-3">
        <div className="max-w-screen-2xl  ml-auto mr-auto">
          <h1 className="uppercase text-4xl lg:text-9xl text-white font-bold">services</h1>
          <div className="grid gap-x-8 gap-y-8 lg:grid-cols-3 pt-16">
            <div className="">
              <h4 className="font-sans font-normal text-white uppercase text-2xl">Co-Nodes</h4>
              <p className="font-sans font-normal text-white text-base md:text-lg uppercase pt-2">
                Collaborative staking among users to pool to achieve threshold stake and operate
                collectively. This democratises participation and allows sub-stake holders to benefit
                from reward protocols. It also enables compounding as participants can sweep earned
                rewards into further Co-Nodes
              </p>
              <div className="pt-16">
                <img src="images/Icon.png" alt="logo.png" />
              </div>
            </div>
            <div className="">
              <h4 className="font-sans font-normal text-white uppercase text-2xl">Managed nodes</h4>
              <p className="font-sans font-normal text-white text-base md:text-lg uppercase pt-2">
                Outsource node deployment, management, and maintenance to Node Army for a small
                commission of earned rewards. Develop a passive yield portfolio with minimum time and
                skill commitment.
              </p>
              <div className="pt-16">
                <img src="images/Icon1.png" alt="logo.png" />
              </div>
            </div>
            <div className="">
              <div className="pb-10">
                <img src="images/img-1.png" alt="logo.png" />
              </div>
              <h4 className="font-sans font-normal text-white uppercase text-2xl">Nodes as a service</h4>
              <p className="font-sans font-normal text-white text-base md:text-lg uppercase pt-2">
                An industrial node solution for projects requiring robust decentralised node infrastructures
                at scale. Node Army collaborates with projects during development phase and through a
                blockchain lifecycle.
              </p>
              <div className="pt-16">
                <img src="images/Icon3.png" alt="logo.png" />
              </div>
            </div>
          </div>
          <div className="grid gap-x-8 gap-y-8 lg:grid-cols-3 pt-16">
            <div className="">
              <h4 className="font-sans font-normal text-white uppercase text-2xl">Rewards</h4>
              <p className="font-sans font-normal text-white text-base md:text-lg uppercase pt-2">
                Participate in underlying projects offering rewards for staking, validating, and
                securing their network through a transparent process. Node Army does not offer or
                promote its own Node Army yield, but rewards are transparently distributed on the
                blockchain according to the underlying project's protocol and tokenomics.
              </p>
              <div className="pt-16">
                <img src="images/Icon4.png" alt="logo.png" />
              </div>
            </div>
            <div className="">
              <h4 className="font-sans font-normal text-white uppercase text-2xl">Node build templates</h4>
              <p className="font-sans font-normal text-white text-base md:text-lg uppercase pt-2">
                Easily deploy nodes with pre-built templates hosted in the Marketplaces of premier cloud
                computing providers. Templates are specific to the different underlying blockchain networks,
                designed to make deployment seamless.
              </p>
              <div className="pt-16">
                <img src="images/Icon5.png" alt="logo.png" />
              </div>
            </div>
            <div className=""></div>
          </div>
          <div className="grid gap-x-8 gap-y-8 lg:grid-cols-3 pt-16">
            <div className=""></div>
            <div className="">
              <img src="images/img-2.png" alt="logo.png" />
            </div>
            <div className="">
              <h4 className="font-sans font-normal text-white uppercase text-2xl">Blockchain scalability </h4>
              <p className="font-sans font-normal text-white text-base md:text-lg uppercase pt-2">
                Leverage scalable blockchain infrastructure and a substantial and growing community of
                committed datapreneurs for rapid and effective scaling of blockchain-based applications.
                Maintain high performance and security in a decentralised approach.
              </p>
              <div className="pt-16">
                <img src="images/Icon6.png" alt="logo.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex overflow-x-hidden bg-hero-pattern z-20">
        <div className="pt-3 pb-3 animate-marquee whitespace-nowrap">
          <span className="mx-16 text-base font-bold">Marquee Item 1</span>
          <span className="mx-16 text-base font-bold">Marquee Item 2</span>
          <span className="mx-16 text-base font-bold">Marquee Item 3</span>
          <span className="mx-16 text-base font-bold">Marquee Item 4</span>
          <span className="mx-16 text-base font-bold">Marquee Item 5</span>
        </div>

        <div className="absolute top-0 pt-3 pb-3 animate-marquee2 whitespace-nowrap">
          <span className="mx-16 text-base font-bold">Marquee Item 1</span>
          <span className="mx-16 text-base font-bold">Marquee Item 2</span>
          <span className="mx-16 text-base font-bold">Marquee Item 3</span>
          <span className="mx-16 text-base font-bold">Marquee Item 4</span>
          <span className="mx-16 text-base font-bold">Marquee Item 5</span>
        </div>
      </div>
      <div className="bg-regal-blue pt-20 pb-40 px-3">
        <div className="max-w-screen-2xl ml-auto mr-auto">
          <h2 className="uppercase text-4xl lg:text-9xl text-white font-bold">Environment statement</h2>
          <div className="grid gap-x-8 gap-y-8 lg:grid-cols-3 pt-16">
            <div className="">
              <h4 className="font-sans font-normal text-white uppercase text-2xl">proof of stake</h4>
              <p className="font-sans font-normal text-white text-base md:text-lg uppercase pt-2">
                Proof of stake blockchain validation is more environmentally friendly than proof of work,
                as it consumes significantly less energy by not requiring computational puzzles to be solved.
                Validators are selected based on cryptocurrency holdings, reducing the carbon footprint of
                the network.
                <br />
                <br />
                Unless directly disclosed none of the projects we support will operate through Proof of Work.
              </p>
              <div className="pt-16">
                <img src="images/Icon6.png" alt="logo.png" />
              </div>
            </div>
            <div className="">
              <h4 className="font-sans font-normal text-white uppercase text-2xl">Cloud computing</h4>
              <p className="font-sans font-normal text-white text-base md:text-lg uppercase pt-2">
                Cloud computing provides more efficient resource usage , reducing the need for physical
                hardware and lowering the carbon footprint of the network. Other benefits include
                increased scalability, faster transaction speeds, and improved accessibility.
                <br />
                <br />
                Overall, cloud computing provides an eco-friendly and efficient solution for validating and recording transactions on PoS blockchains.
              </p>
              <div className="pt-16">
                <img src="images/Icon7.png" alt="logo.png" />
              </div>
            </div>
            <div className=""></div>
          </div>
          <div className="grid gap-x-8 gap-y-8 lg:grid-cols-3 pt-16">
            <div className=""></div>
            <div className="">
              <img src="images/img-3.png" alt="logo.png" />
            </div>
            <div className="">
              <h4 className="font-sans font-normal text-white uppercase text-2xl">Node army</h4>
              <p className="font-sans font-normal text-white text-base md:text-lg uppercase pt-2">
                We regularly review cloud computing platforms to ensure you can choose from proven,
                reliable, scalable and environmentally responsible providers. Node Army will endeavor
                to integrate a energy utilization metric to our and your dashboards in the near future
                for transparency of impact
              </p>
              <div className="pt-16">
                <img src="images/Icon8.png" alt="logo.png" />
              </div>
            </div>
          </div>
          <div className="FaqWrap pt-44">
            <h2 className="uppercase text-4xl lg:text-9xl text-white font-bold 2xl:whitespace-nowrap pb-16">Frequently Asked</h2>
            <Fragment>
              <Accordion open={open === 1} className={isActive1 ? 'bg-salmon' : "pb-6"} onClick={handleClick1}>
                <AccordionHeader className="after:content-[''] after:block after:text-black  after:absolute after:h-full after:-z-10 relative z-10 font-sans text-white hover:text-white text-left active:bg-current  text-xl md:text-3xl font-medium uppercase border-0" onClick={() => handleOpen(1)}>
                  What is Node Army?
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-lg text-white font-normal opacity-80 tracking-tight max-w-screen-xl leading-8">
                    Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and
                    businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is
                    secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.
                  </p>
                </AccordionBody>
              </Accordion>
              <Accordion className={isActive2 ? 'bg-salmon2' : "pb-6"} onClick={handleClick2} open={open === 2}>
                <AccordionHeader className="after:content-[''] after:block after:text-black  after:absolute after:h-full after:-z-10 relative z-10 font-sans text-white hover:text-white text-left active:bg-current  text-xl md:text-3xl font-medium uppercase border-0" onClick={() => handleOpen(2)}>
                  How can I benefit from using Node Army?
                </AccordionHeader>
                <AccordionBody>
                  <p className="md:text-lg text-base text-white font-normal opacity-80 tracking-tight max-w-screen-xl leading-8">
                    Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and
                    businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is
                    secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.
                  </p>
                </AccordionBody>
              </Accordion>
              <Accordion className={isActive3 ? 'bg-salmon3' : "pb-6"} onClick={handleClick3} open={open === 3}>
                <AccordionHeader className="after:content-[''] after:block after:text-black  after:absolute after:h-full after:-z-10 relative z-10 font-sans text-white hover:text-white text-left active:bg-current  text-xl md:text-3xl font-medium uppercase border-0" onClick={() => handleOpen(3)}>
                  Do I need technical expertise to use Node Army?
                </AccordionHeader>
                <AccordionBody>
                  <p className="md:text-lg text-base text-white font-normal opacity-80 tracking-tight max-w-screen-xl leading-8">
                    Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and
                    businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is
                    secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.
                  </p>
                </AccordionBody>
              </Accordion>
              <Accordion className={isActive4 ? 'bg-salmon4' : "pb-6"} onClick={handleClick4} open={open === 4}>
                <AccordionHeader className="after:content-[''] after:block after:text-black  after:absolute after:h-full after:-z-10 relative z-10 font-sans text-white hover:text-white text-left active:bg-current  text-xl md:text-3xl font-medium uppercase border-0" onClick={() => handleOpen(4)}>
                  What kind of support does Node Army provide?
                </AccordionHeader>
                <AccordionBody>
                  <p className="md:text-lg text-base text-white font-normal opacity-80 tracking-tight max-w-screen-xl leading-8">
                    Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and
                    businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is
                    secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.
                  </p>
                </AccordionBody>
              </Accordion>
              <Accordion className={isActive5 ? 'bg-salmon5' : "pb-6"} onClick={handleClick5} open={open === 5}>
                <AccordionHeader className="after:content-[''] after:block after:text-black  after:absolute after:h-full after:-z-10 relative z-10 font-sans text-white hover:text-white text-left active:bg-current  text-xl md:text-3xl font-medium uppercase border-0" onClick={() => handleOpen(5)}>
                  How do I get started with Node Army?
                </AccordionHeader>
                <AccordionBody>
                  <p className="md:text-lg text-base text-white font-normal opacity-80 tracking-tight max-w-screen-xl leading-8">
                    Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and
                    businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is
                    secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.
                  </p>
                </AccordionBody>
              </Accordion>
              <Accordion className={isActive6 ? 'bg-salmon6' : "pb-6"} onClick={handleClick6} open={open === 6}>
                <AccordionHeader  className="after:content-[''] after:block after:text-black after:absolute after:h-full after:-z-10 relative z-10 font-sans text-white hover:text-white text-left active:bg-current  text-xl md:text-3xl font-medium uppercase border-0" onClick={() => handleOpen(6)}>
                  How will I be rewarded by using Node Army?
                </AccordionHeader>
                <AccordionBody>
                  <p className="md:text-lg text-base text-white font-normal opacity-80 tracking-tight max-w-screen-xl leading-8">
                    Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and
                    businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is
                    secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.
                  </p>
                </AccordionBody>
              </Accordion>
            </Fragment>
          </div>
        </div>
      </div>


    </>
  );
}
