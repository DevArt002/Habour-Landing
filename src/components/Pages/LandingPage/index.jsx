import React, { useCallback, useState } from 'react'
// Import custom components
import { BaseAvatar, BaseButton, BaseSelect, BaseFAQItem } from 'Components/Common'
import TestimonialCarousel from 'Components/TestimonialCarousel'
// Import utils
import dateConvert from 'Utils'
// Import styles
import './style.scss'
// Import images
import Icon from 'Assets/images/icon.svg'
import Logo from 'Assets/images/logo.svg'
import Pattern from 'Assets/images/pattern-2.svg'
import CirclePattern from 'Assets/images/circle-pattern.svg'

const LandingPage = ({ data }) => {
  const { scholarship, testimonials } = data
  const [faqs, setFaqs] = useState(scholarship.faqs.items)

  // Listener for faq filter option change
  const handleFAQFilter = useCallback((option) => {
    const newFaqs =
      option === 'All' ? scholarship.faqs.items : [...faqs].filter((faq) => faq.type === option)

    setFaqs(newFaqs)
  }, [])

  // Listener for apply button click
  const handleApplyClick = useCallback(() => {
    // TODO
  }, [])

  return (
    <div className="landing-page">
      <div className="landing-page__row landing-page__row1">
        <div className="landing-page__col landing-page__row1--col1">
          <span className="landing-page__title">{scholarship.name}</span>
          <img src={Icon} />
        </div>
        <div className="landing-page__col landing-page__row1--col2">
          <img src={Logo} />
          <div>
            <span>Powered by:</span>
            <span>Zeptolab</span>
          </div>
        </div>
      </div>
      <div className="landing-page__row landing-page__row2">
        <div className="landing-page__col landing-page__row2--col1">
          <p className="landing-page__bold-description-label">
            A fully funded work-study program to launch your tech career{' '}
          </p>
          <p className="landing-page__description-label">{scholarship.description[0].data}</p>
          <p className="landing-page__description-label">
            <span className="landing-page__bold-description-label">Position:</span> Marketing
            Performance
          </p>
        </div>
        <div className="landing-page__col landing-page__row2--col2">
          <div className="landing-page__border">
            <p className="landing-page__small-title">Application closes in</p>
            <p>6 Day : 22 Hrs : 56 Min : 13 Seg </p>
          </div>
          <div className="landing-page__border">
            <div>
              <div>
                <p className="landing-page__small-title">Location</p>
                <p>{scholarship.location.name}</p>
              </div>
              <div>
                <p className="landing-page__small-title">Duration</p>
                <p>{scholarship.duration} Year</p>
              </div>
            </div>
            <div>
              <div>
                <p className="landing-page__small-title">Start date</p>
                <p>{dateConvert(scholarship.scholarship_start_date)}</p>
              </div>
              <div>
                <p className="landing-page__small-title">End date</p>
                <p>{dateConvert(scholarship.application_end_date)}</p>
              </div>
            </div>
          </div>
          <img src={Pattern} />
        </div>
      </div>
      <div className="landing-page__row landing-page__row3">
        <BaseButton onClick={handleApplyClick}>Apply Now</BaseButton>
      </div>
      <div className="landing-page__row landing-page__row4">
        <div className="landing-page__col landing-page__row4--col1">
          <img src={CirclePattern} />
          <BaseAvatar
            className="landing-page__circle-image"
            image="http://stage.harbour.space/storage/images/students/6dee4110-4148-11eb-8e59-c1fae2714eaf.png"
          />
        </div>
        <div className="landing-page__col landing-page__row4--col2">
          <span className="landing-page__title">About the apprenticeship</span>
          <p className="landing-page__description-label">{scholarship.about[0].data}</p>
          <div className="landing-page__bg"></div>
        </div>
      </div>

      <div className="landing-page__row landing-page__row5">
        <div className="landing-page__col landing-page__row5--col1 landing-page__border">
          <div>
            <p className="landing-page__small-title">Scholarship value</p>
            <p>€{scholarship.total_value}</p>
          </div>
          <hr />
          <div>
            <div>
              <p className="landing-page__small-title">
                Tuition <span className="landing-page__removable">covered</span>
              </p>
              <p>€{scholarship.tuition}</p>
            </div>
            <div>
              <p className="landing-page__small-title">Remaining</p>
              <p>€{scholarship.remaining}</p>
            </div>
            <div>
              <p className="landing-page__small-title">Living stipend</p>
              <p>
                €{scholarship.stipend_per_year} (€{scholarship.stipend_per_month}/month)
              </p>
            </div>
          </div>
        </div>
        <div className="landing-page__col landing-page__row5--col2">
          <div>
            <div className="landing-page__border">
              <p className="landing-page__small-title">Study commitment</p>
              <p>{scholarship.study_commitment} hours/day </p>
              <p>{scholarship.study_commitment_text}</p>
            </div>
            <div className="landing-page__border">
              <p className="landing-page__small-title">Intership commitment</p>
              <p>{scholarship.internship_commitment} hours/day </p>
              <p>{scholarship.internship_commitment_text}</p>
            </div>
          </div>
          <div>
            <hr />
            <span>GRADUATION</span>
          </div>
          <div className="landing-page__border">
            <p className="landing-page__small-title">A full-time contract</p>
            <p>1 Year / Full-Time </p>
            <p>You’ll be guaranteed a 1 year contract with SCG upon graduation. </p>
          </div>
        </div>
      </div>
      <div className="landing-page__row landing-page__row6">
        <TestimonialCarousel className="landing-page__carousel" testimonials={testimonials} />
      </div>
      <div className="landing-page__row landing-page__row7">
        <div className="landing-page__col landing-page__row7--col1">
          <span className="landing-page__title">Frequently asked questions</span>
        </div>
        <div className="landing-page__col landing-page__row7--col2">
          <span>Filter by: </span>
          <BaseSelect
            className="landing-page__faq-filter"
            options={['All', ...scholarship.faqs.categories]}
            onChange={handleFAQFilter}
          />
        </div>
      </div>
      <div className="landing-page__row landing-page__row8">
        {faqs.map((faq, index) => {
          return (
            <div key={`landing-page__faq__${index}`}>
              <hr />
              <BaseFAQItem className="landing-page__faq" faq={faq} />
              {faqs.length === index + 1 && <hr />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LandingPage
