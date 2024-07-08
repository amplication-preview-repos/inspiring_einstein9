import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MATCH_TITLE_FIELD } from "../match/MatchTitle";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="content" source="content" />
        <TextField label="receiver" source="receiver" />
        <ReferenceField label="match" source="match.id" reference="Match">
          <TextField source={MATCH_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="sender" source="sender" />
      </SimpleShowLayout>
    </Show>
  );
};
