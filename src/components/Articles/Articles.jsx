import s from "./Articles.module.css";

const Articles = ({ articles }) => {
  return (
    <ul className={s.list}>
      {articles.map((item) => (
        <li className={s.item} key={item.objectID}>
          <a className={s.link} target="blank" href={item.url}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Articles;
