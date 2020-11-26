import { useContext } from 'react';
import DataContext from '../components/dataContext';
import { useRouter } from 'next/router'

import Head from 'next/head'
import Link from 'next/link'
import Layout, { title } from '../components/layout'
import utilStyles from '../../public/sass/utils.module.scss'


function CountryRollOut({ country }) {
  const { data } = useContext(DataContext);
  const router = useRouter().query.rollout;

  data.filter((obj) => {
    if (obj.id === router) {
      country = obj;
      return country
    }
  });

  var body = <p>{country.excerpt}</p>
  if (country.body != undefined) {
    body = country.body.map(function(element){
      if (element.type == "paragraph") {
        if (element.link != undefined){
          var split_content = element.content.split("<link>")
          return <p>{ split_content[0] } <a href={element.link}>{element.link_text}</a>{ split_content[1] }</p>;
        }
        return <p>{ element.content }</p>;
      }
      else if (element.type == "list") {
        return <ul className='service-list'>{ element.items.map(function(item,index){
          var key = "service-"+index;
          if (item.link != undefined){
            var split_content = item.content.split("<link>")
            return <li key={key}>{ split_content[0] } <a href={item.link}>{item.link_text}</a>{ split_content[1] }</li>;
          }
          return <li key={key}>{item.content}</li>;
        })}</ul>
      }
    })
  }

  return (
    <Layout dynamic>
      <section className={`${utilStyles.wrapper__countrycontent} ${utilStyles.wrapper__about}`}>
        <div className={utilStyles.countrycaption} data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out-quad">
          <div className={utilStyles.thumbnailDiv}>
            <img src={country.src}
              className={utilStyles.thumbnail}
            />
          </div>

          <h2 className={`${utilStyles.countrytitle} ${utilStyles.countrytitleStrong}`}>
            {country.title}
          </h2>
          <p className={utilStyles.descriptioncountry}>
            {country.subtitle}
          </p>

        </div>

        <div className={utilStyles.body}>
          { body }

          {country.services && (
            <div className="two-column">
              {country.services.map((p, i) => (
                <div key={i} className="two-column__item">
                  <h4 className="heading_micro">
                    {p.title}
                  </h4>
                  <p>{p.subtitle}</p>
                  <div className="column-cta">
                    <a href={p.href} className={`${utilStyles.button} ${utilStyles.buttonPrimary}`}>Visit {p.title}</a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>

  )

}
export default CountryRollOut
