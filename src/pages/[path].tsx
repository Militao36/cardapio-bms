/* eslint-disable @next/next/no-img-element */
import { api } from "@/api/api";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { RiMoneyDollarCircleLine, RiMapPinLine } from "react-icons/ri";
import { TfiUnlock } from "react-icons/tfi";
import { BsClock } from "react-icons/bs";

import { useState } from "react";
import { ButtonMoreCompany, ButtonWhatsApp, CompanyLogo, Container, FooterCompany, Header, ImageBanner, InfoCompany, Text, TextContainer } from "@/styles/header";
import { AllCategorys, ButtonCloseOrOpen, DeliveryInfo, TextDelivery } from "@/styles/subHeader";
import { BtnAdd, CardProducts, CategoryItem, ContentItens, ImgProduct, InfoProducts, TextDescription, TextProduct, TextValue } from "@/styles/products";
import { BtnPayment, ContentPayment, FooterPayment } from "@/styles/payment";
import { ContentProductDescription, ModalProduct } from "@/styles/modal";

export async function getServerSideProps(context: any) {
  const { path } = context.params;

  async function fetchCompany() {
    const response = await api.get("/companies/company/" + path, {
      headers: { companylink: path },
    });
    return response.data;
  }

  async function fetchCategory() {
    const response = await api.get("/category/", {
      headers: { companylink: path },
    });
    return response.data;
  }

  async function findAllProductsOfCategories() {
    const { data: { data } } = await api.get("/products", {
      headers: { companylink: path },
    });
    return data
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

  const [company, schedules, configuration, category, products] = await Promise.all([
    fetchCompany(),
    findBySchedulesOfCompanyLink(),
    findConfiguration(),
    fetchCategory(),
    findAllProductsOfCategories(),
  ]);

  return {
    props: {
      company,
      companyCloseOrOpen: schedules,
      configuration,
      category,
      products,
    },

  };
}

interface MenuProps {
  company: any;
  category: any;
  products: any;
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
  const company = props.company;
  const companyCloseOrOpen = props.companyCloseOrOpen;
  const category = props.category;
  const products = props.products;
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    console.log(open);

    setOpen(!open)
  }

  return (
    <>
      <Header>
        <ImageBanner src={company.banner} />
        <InfoCompany>
          <CompanyLogo src={company.logo} />
          <Container>
            <TextContainer>
              <Text className="name-company">{company.name}</Text>
              <Text className="company-address">
                <RiMapPinLine /> {company.address}, {company.number} -
                {company.district} {company.city}
              </Text>
            </TextContainer>
          </Container>
        </InfoCompany>
        <FooterCompany>
          <ButtonMoreCompany>
            Sobre a loja <BsArrowRightCircleFill />
          </ButtonMoreCompany>
          <ButtonWhatsApp>
            <FaWhatsappSquare color="white" size={30} />
          </ButtonWhatsApp>
        </FooterCompany>
      </Header>

      <DeliveryInfo>
        <TextDelivery>
          <span> <RiMoneyDollarCircleLine /> Pedido Minimo: R$ 25,00</span>
          <span> <BsClock /> Tempo médio de Entrega : {company.timeDelivery.replace("-", "a") + " min"}</span>
        </TextDelivery>
        <ButtonCloseOrOpen> <TfiUnlock size={15} /> {companyCloseOrOpen === true ? "Aberto" : "Fechado"} </ButtonCloseOrOpen>
      </DeliveryInfo>
      <AllCategorys>
        {category?.map((categorias: any) => (
          <CategoryItem key={categorias.id}>
            <span>{categorias.name}</span>
          </CategoryItem>
        ))}
      </AllCategorys>
      <ContentItens>
        {products?.map((product: any) => (
          <CardProducts key={product.id}>
            <InfoProducts>
              <TextProduct>{product.name}</TextProduct>
              <TextDescription>{product.description !== null ? product.description : "descrição do produto"}</TextDescription>
              <TextValue> R$ {product.pricing}</TextValue>
              <BtnAdd onClick={toggleModal}>Adicionar</BtnAdd>
            </InfoProducts>
            <ImgProduct src={product.image} alt="imagem produto" />
          </CardProducts>
        ))}
      </ContentItens>
      <FooterPayment>
        <ContentPayment>
          <BtnPayment>Adicionar</BtnPayment>
          <BtnPayment>Adicionar</BtnPayment>
        </ContentPayment>
      </FooterPayment>
      <ModalProduct style={{ visibility: open ? "visible" : "hidden", position: open ? "fixed" : "relative" }}>
        <ContentProductDescription>
          <BtnPayment onClick={toggleModal}>Adicionar</BtnPayment>
        </ContentProductDescription>
      </ModalProduct>
    </>
  );
}

