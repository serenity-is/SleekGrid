import type { Grid } from "./grid";
import type { Editor, ValidationResult } from "./editor";
import type { AsyncPostCleanup, AsyncPostRender, ColumnFormatter } from "./formatting";
import { GroupTotals } from "../core/index";

export interface Column<TItem = any> {
    asyncPostRender?: AsyncPostRender<TItem>;
    asyncPostRenderCleanup?: AsyncPostCleanup<TItem>;
    behavior?: any;
    cannotTriggerInsert?: boolean;
    cssClass?: string;
    defaultSortAsc?: boolean;
    editor?: Editor;
    field: string;
    frozen?: boolean;
    focusable?: boolean;
    footerCssClass?: string;
    formatter?: ColumnFormatter<TItem>;
    groupTotalsFormatter?: (p1?: GroupTotals<TItem>, p2?: Column<TItem>, grid?: Grid<TItem>) => string;
    headerCssClass?: string;
    id?: string;
    maxWidth?: any;
    minWidth?: number;
    name?: string;
    nameIsHtml?: boolean;
    previousWidth?: number;
    referencedFields?: string[];
    rerenderOnResize?: boolean;
    resizable?: boolean;
    selectable?: boolean;
    sortable?: boolean;
    sortOrder?: number;
    toolTip?: string;
    validator?: (value: any) => ValidationResult;
    visible?: boolean;
    width?: number;
}

export const columnDefaults: Partial<Column> = {
    name: "",
    nameIsHtml: false,
    resizable: true,
    sortable: false,
    minWidth: 30,
    rerenderOnResize: false,
    headerCssClass: null,
    footerCssClass: null,
    defaultSortAsc: true,
    focusable: true,
    selectable: true
};

export interface ColumnMetadata<TItem = any> {
    colspan: number | '*';
    formatter?: ColumnFormatter<TItem>;
}

export interface ColumnSort {
    columnId: string;
    sortAsc?: boolean;
}

export interface ItemMetadata<TItem = any> {
    columns?: { [key: string]: ColumnMetadata<TItem> };
    formatter?: ColumnFormatter<TItem>;
}

