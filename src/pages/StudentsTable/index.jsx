import { DataGrid } from "@mui/x-data-grid";

import { useStudentsTable } from "./useStudentsTable";
import classes from "./style.module.css";
import { columns } from "../../constants/constants";

const StudentsTable = () => {
	const {
		onPageSizeChange,
		onPageChange,
		sortModel,
		students,
		totalPages,
		handleSortModelChange,
		studentsWithKey,
		onSelectionModelChange,
		customRow,
	} = useStudentsTable();

	return (
		<div style={{ height: 600, width: "100%" }}>
			<DataGrid
				disableColumnMenu
				classes={{
					"columnSeparator--sideRight": classes.columnSeparator,
					columnHeadersInner: classes.columnHeadersInner,
					columnHeaderTitle: classes.columnHeaderTitle,
					columnHeaderTitleContainer: classes.columnHeaderTitleContainer,
					root: classes.root,
					footerContainer: classes.footerContainer,
					selectLabel: classes.selectLabel,
					columnHeaderTitleContainerContent:
						classes.columnHeaderTitleContainerContent,
					selectedRowCount: classes.selectedRowCount,
				}}
				hideFooterSelectedRowCount
				paginationMode="server"
				rowCount={students.length * totalPages}
				pagination
				sortingMode="server"
				sortModel={sortModel}
				onSortModelChange={handleSortModelChange}
				components={{
					Row: customRow,
				}}
				onSelectionModelChange={onSelectionModelChange}
				pageSize={students.length}
				rows={studentsWithKey}
				row={(student) => student.id}
				columns={columns}
				checkboxSelection
				rowsPerPageOptions={[5, 10, 20]}
				onPageChange={onPageChange}
				onPageSizeChange={onPageSizeChange}
			/>
		</div>
	);
};

export default StudentsTable;
