import "../index.css";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import events from '../data/events.json';
import Card from './Card';
import Modal from './Modal';

export default function TimelineContainer() {
  const entries = Object.entries(events);
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState({ title: '', info: {} });

  const openModal = (title, info) => {
    setActive({ title, info });
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 overflow-visible">
      <Swiper
        modules={[EffectCards, Pagination]}
        effect="cards"
        grabCursor={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        centeredSlides={true}
        containerClass="overflow-visible"
        wrapperClass="overflow-visible"
        className="w-80 h-96 relative z-0 overflow-visible"
        containerModifierClass="swiper-container-"
      >
        {entries.map(([title, info], idx) => (
          <SwiperSlide
            key={idx}
            className="flex items-center justify-center overflow-visible"
          >
            <div onClick={() => openModal(title, info)}>
              <Card title={title} info={info} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal
        show={modalOpen}
        onClose={closeModal}
        title={active.title}
        info={active.info}
      />
    </div>
  );
}
