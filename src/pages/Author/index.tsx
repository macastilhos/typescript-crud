import { Author } from "../../interfaces/RecordEntities";
import { RecordIndex } from "../Record";
import { AuthorListItem } from "./ListItem";
import { AuthorFormFields } from "./FormFields";

export const AutorIndex: React.FC = () => {
  const apiOptions = {};

  const emptyRecord = {
    name: "",
  };

  return (
    <RecordIndex<Author>
      ListItem={AuthorListItem}
      apiPath="authors"
      apiOptions={apiOptions}
      emptyRecord={emptyRecord}
      FormFields={AuthorFormFields}
    />
  );
};
