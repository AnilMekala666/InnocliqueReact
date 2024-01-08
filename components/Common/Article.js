import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";

const Article = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>ARTICLE</span>
            <h2>
              Read Our Blog To Get All Recent Tech <b>News</b>
            </h2>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper blog-slides"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <SwiperSlide>
              <div className="blog-card">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="blog-image">
                      <Link href="/blog/single-blog">
                        <a>
                          <img src="/images/blog/blog-1.jpeg" alt="image" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-content">
                      <div className="date">8th December, 2023</div>
                      <h3>
                        <Link href="/blog/single-blog">
                          <a>
                            Revolutionizing Small Industries
                          </a>
                        </Link>
                      </h3>
                      <p>
                        In today's fast-paced business world, small industries across emerging markets such as the India, UAE, Africa, and Latin America are facing a new paradigm.
                      </p>

                      <Link href="/blog/single-blog">
                        <a className="blog-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="blog-card">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="blog-image">
                      <Link href="/blog/single-blog">
                        <a>
                          <img src="/images/blog/blog-2.png" alt="image" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-content">
                      <div className="date">7th December, 2023</div>
                      <h3>
                        <Link href="/blog/single-blog">
                          <a>Elevating Business with Smart Automation Solutions</a>
                        </Link>
                      </h3>
                      <p>
                      Welcome to the world of Innoclique, where we transform the complexities of business operations into streamlined, efficient processes
                      </p>
                      <Link href="https://www.linkedin.com/pulse/innoclique-elevating-business-smart-gjtac%3FtrackingId=TRmKIf3lkBu3O1ZSIOIDsw%253D%253D/?trackingId=TRmKIf3lkBu3O1ZSIOIDsw%3D%3D">
                        <a className="blog-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="blog-card">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="blog-image">
                      <Link href="/blog/single-blog">
                        <a>
                          <img src="/images/blog/blog-3.jpg" alt="image" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-content">
                      <div className="date">9th July, 2022</div>
                      <h3>
                        <Link href="/blog/single-blog">
                          <a>
                            How Technology Dominate In The new World In 2022
                          </a>
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet conset sadipscing elitr sed
                        diam nonumy eir m od tempor invidunt ut labore.
                      </p>
                      <Link href="/blog/single-blog">
                        <a className="blog-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div className="blog-card">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="blog-image">
                      <Link href="/blog/single-blog">
                        <a>
                          <img src="/images/blog/blog-2.jpg" alt="image" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-content">
                      <div className="date">7th July, 2022</div>
                      <h3>
                        <Link href="/blog/single-blog">
                          <a>Top 10 Most Famous Technology Trend In 2022</a>
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet conset sadipscing elitr sed
                        diam nonumy eir m od tempor invidunt ut labore.
                      </p>
                      <Link href="/blog/single-blog">
                        <a className="blog-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Article;
