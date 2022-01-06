import { useState } from "react";
import { Record } from "../../interfaces/RecordEntities";
import { RecordIndexProps } from "../../interfaces/PageProps";
import { useFetch } from "../../hooks/UseFetch";
import { RecordList } from "./List";
import { RecordMutations } from "./Mutations";

export const RecordIndex = <T extends Record>({
  ListItem,
  apiPath,
  apiOptions,
  FormFields,
  emptyRecord,
}: RecordIndexProps<T>) => {
  const [activeRecord, setActiveRecord] = useState<T>(emptyRecord);
  const { records, setVersion } = useFetch<T>(apiPath, apiOptions);

  const callback = () => {
    setVersion(+new Date());
    setActiveRecord(emptyRecord);
  };
  return (
    <div className="page">
      <div className="content">
        <RecordList<T>
          ListItem={ListItem}
          records={records}
          emptyRecord={emptyRecord}
          activeRecord={activeRecord}
          setActiveRecord={setActiveRecord}
        />
        <RecordMutations<T>
          FormFields={FormFields}
          activeRecord={activeRecord}
          apiPath={apiPath}
          callback={callback}
        />
      </div>
    </div>
  );
};
