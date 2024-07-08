import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="reason" source="reason" />
        <TextField label="status" source="status" />
        <TextField label="reportedBy" source="reportedBy" />
        <TextField label="reportedUser" source="reportedUser" />
      </SimpleShowLayout>
    </Show>
  );
};
