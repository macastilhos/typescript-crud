import { useFetch } from "../../hooks/UseFetch";
import { FormFieldsProps } from "../../interfaces/PageProps";
import { Article, Author } from "../../interfaces/RecordEntities";

type IProps = FormFieldsProps<Article>;

export const ArticleFormFields: React.FC<IProps> = ({
  formState,
  handleChange,
}) => {
  const authorFetch = useFetch<Author>("authors");

  return (
    <div>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
        />
        <label>Text</label>
        <textarea
          name="text"
          value={formState.text}
          onChange={handleChange}
          rows={5}
        />
        <label>Author</label>
        <select
          name="author"
          value={formState.author ? formState.author.id : ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {authorFetch.records.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
