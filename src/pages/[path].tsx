/* eslint-disable @next/next/no-img-element */
import { api } from "@/api/api";
import { BsArrowRightCircleFill, BsPinMapFill } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import {
  ButtonMoreCompany,
  ButtonWhatsApp,
  CompanyLogo,
  Container,
  Header,
  ImageBanner,
  InfoCompany,
  Text,
} from "@/global";

export async function getServerSideProps(context: any) {
  const { path } = context.params;

  async function fetchCompany() {
    const response = await api.get("/companies/company/" + path, {
      headers: { companylink: path },
    });
    return response.data;
  }

  async function findBySchedulesOfCompanyLink() {
    try {
      await api.get("/companies/company/schedules/" + path, {
        headers: { companylink: path },
      });
      return true;
    } catch (error) {
      return true;
    }
  }

  async function findConfiguration() {
    const { data } = await api.get("/configurations/company/" + path, {
      headers: { companylink: path },
    });

    return {
      activeRetirada: data.activeRetirada,
      pricingMinDelivery: data.pricingMinDelivery,
      activeRating: data.activeRating,
      methodDelivery: data?.methodDelivery ?? null,
      googleKey: data?.googleKey ?? null,
    };
  }

  const [company, schedules, configuration] = await Promise.all([
    fetchCompany(),
    findBySchedulesOfCompanyLink(),
    findConfiguration(),
  ]);

  return {
    props: {
      company,
      companyCloseOrOpen: schedules,
      configuration,
    },
  };
}

interface MenuProps {
  company: any;
  companyCloseOrOpen: boolean;
  configuration: {
    activeRetirada: boolean;
    pricingMinDelivery: number;
    activeRating: boolean;
    methodDelivery: string;
    googleKey: string;
  };
}

export default function Menu(props: MenuProps) {
  console.log(props)
  const company = props.company;
  const companyCloseOrOpen = props.companyCloseOrOpen;

  return (
    <Header>
      <ImageBanner src={company.banner} />
      <InfoCompany>
        <CompanyLogo src={company.logo} />
        <Container>
          <Text className="name-company">{company.name}</Text>
          <Text className="company-address">
            <BsPinMapFill /> {company.address}, {company.number} -
            {company.district} {company.city}
          </Text>
        </Container>
      </InfoCompany>
      <ButtonMoreCompany>
        Sobre a loja <BsArrowRightCircleFill />
      </ButtonMoreCompany>
      <ButtonWhatsApp>
        <FaWhatsappSquare color="white" size={50} />
      </ButtonWhatsApp>
    </Header>
  );
}
