import React from "react";
import { Card, Col, Row, Button } from "antd";

const products = [
  {
    id: 1,
    name: "NIKE",
    price: "6000sum",
    desc: "cкитка",
    img: "https://images.unsplash.com/photo-1606813902779-8b59f0d72778?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "NIKE Ultraboost",
    price: "9 990 sum",
    desc: "Ультралёгкие кроссовки для бега.",
    img: "https://images.unsplash.com/photo-1593032465174-8b5f8af9da6d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "NIKE RS-X",
    price: "7 200 sum",
    desc: "Яркий стиль и комфорт на каждый день.",
    img: "https://avatars.mds.yandex.net/i?id=20249d0ef060c6f5226164c043a1e48c8a5786fa-4615765-images-thumbs&n=13",
  },
  {
    id: 4,
    name: "New Balance 574",
    price: "10 490 sum",
    desc: "Классика для повседневного образа.",
    img: "https://avatars.mds.yandex.net/i?id=18413e20ae5e37a86ae1e1980d95a377a8df1f28-5286078-images-thumbs&n=13",
  },
  {
    id: 5,
    name: "Reebok Classic",
    price: "6 800 sum",
    desc: "Легендарные кроссовки на все времена.",
    img: "https://avatars.mds.yandex.net/i?id=1dc7ea234c54c54c8af3f685121e8fc296f49977-4219907-images-thumbs&n=13",
  },
  {
    id: 6,
    name: "Asics Gel-Kayano",
    price: "11 200 sum",
    desc: "Максимальная поддержка и амортизация.",
    img: "https://avatars.mds.yandex.net/i?id=f64c31d19324c2c784b75fcb52c6daa3a97f0ee9-9211927-images-thumbs&n=13",
  },
];

function Home() {
  return (
    <div style={{ padding: 40 }}>
      <Row gutter={[24, 24]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8}>
            <Card
              hoverable
              style={{
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                textAlign: "center",
              }}
              cover={
                <img
                  alt={product.name}
                  src={product.img}
                  style={{ height: 220, objectFit: "cover" }}
                />
              }
            >
              <h2 style={{ marginBottom: 8 }}>{product.name}</h2>
              <p style={{ color: "gray", marginBottom: 16 }}>{product.desc}</p>
              <h3 style={{ marginBottom: 16 }}>{product.price}</h3>
              <Button type="primary" shape="round" size="large">
                Купить
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
