import React from 'react';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import { DataSet, Table, Button } from 'choerodon-ui/pro';
import { ButtonColor } from 'choerodon-ui/pro/lib/button/enum';
import { TableButtonType } from 'choerodon-ui/pro/lib/table/enum';
import { ColumnProps } from 'choerodon-ui/pro/lib/table/Column';
import { getCurrentOrganizationId } from 'utils/utils';
import commonConfig from '@common/config/commonConfig';
import {
  useDataSet,
  useDataSetCurrentPage,
  useDataSetIsSelected,
  useDataSetEvent,
} from 'hzero-front/lib/utils/hooks';
import {
  DataSetSelection,
  FieldType,
  FieldIgnore,
} from 'choerodon-ui/pro/lib/data-set/enum';
import { AxiosRequestConfig } from 'axios';

const todoDataSetFactory = () =>
  new DataSet({
    autoQuery: true,
    transport: {
      read: (config: AxiosRequestConfig): AxiosRequestConfig => {
        return {
          ...config,
          url: `${
            commonConfig.TODO_API
          }/v1/${getCurrentOrganizationId()}/tasks`,
          method: 'GET',
        };
      },
      submit: ({ data, params }): AxiosRequestConfig => {
        return {
          url: `${
            commonConfig.TODO_API
          }/v1/${getCurrentOrganizationId()}/tasks/submit`,
          data,
          params,
          method: 'POST',
        };
      },
    },
    pageSize: 2,
    selection: 'multiple' as DataSetSelection,
    primaryKey: 'id',
    fields: [
      {
        name: 'employeeObject',
        label: '员工',
        type: 'object' as FieldType,
        lovCode: 'TODO.USER',
        ignore: 'always' as FieldIgnore,
        required: true,
      },
      {
        name: 'employeeId',
        label: '员工ID',
        type: 'number' as FieldType,
        bind: 'employeeObject.id',
      },
      {
        name: 'employeeName',
        label: '员工姓名',
        type: 'string' as FieldType,
        bind: 'employeeObject.employeeName',
      },
      {
        name: 'employeeNumber',
        label: '员工编号',
        type: 'string' as FieldType,
        bind: 'employeeObject.employeeNumber',
      },
      {
        name: 'state',
        label: '任务状态',
        type: 'string' as FieldType,
        lookupCode: 'TODO.TODO_STATE',
        required: true,
      },
      {
        name: 'taskDescription',
        label: '任务描述',
        // type: 'string' as FieldType,
        type: FieldType.string,
        required: true,
      },
      {
        name: 'percent',
        label: '进度',
        type: FieldType.number,
        required: false,
        defaultValue: 0,
      },
      {
        name: 'taskNumber',
        label: '任务编号',
        type: FieldType.string,
        required: true,
        pattern: /^[\dA-Z]*$/,
        defaultValidationMessages: {
          patternMismatch: '只能输入大写字母和数字, 例如: A123', // 正则不匹配的报错信息
        },
      },
    ],
    queryFields: [
      {
        name: 'employeeObject',
        label: '员工',
        type: FieldType.object,
        lovCode: 'TODO.USER',
        ignore: FieldIgnore.always,
      },
      {
        name: 'employeeId',
        label: '员工ID',
        type: FieldType.number,
        bind: 'employeeObject.id',
      },
      {
        name: 'employeeName',
        label: '员工姓名',
        type: FieldType.string,
        bind: 'employeeObject.employeeName',
      },
      {
        name: 'state',
        label: '任务状态',
        type: FieldType.string,
        lookupCode: 'TODO.TODO_STATE',
      },
      {
        name: 'taskDescription',
        label: '任务描述',
        type: FieldType.string,
      },
      {
        name: 'state2',
        label: '任务状态',
        type: FieldType.string,
        lookupCode: 'TODO.TODO_STATE',
      },
      {
        name: 'state',
        label: '任务状态',
        type: FieldType.string,
        lookupCode: 'TODO.TODO_STATE',
      },

      {
        name: 'taskNumber',
        label: '任务编号',
        type: FieldType.string,
      },
      {
        name: 'employeeNumber',
        label: '员工编号',
        type: FieldType.string,
      },
    ],
  });

const HelloWorldPage: React.FC = () => {
  const tableDS = useDataSet(todoDataSetFactory, HelloWorldPage);

  const currentPage = useDataSetCurrentPage(tableDS);
  const isSelected = useDataSetIsSelected(tableDS);
  useDataSetEvent(tableDS, 'load', () => {
    // eslint-disable-next-line no-console
    console.log('数据加载完成！');
  });

  const columns: ColumnProps[] = [
    { name: 'taskNumber', width: 320, editor: true },
    { name: 'taskDescription', editor: true },
    { name: 'state', editor: true },
    { name: 'employeeObject', editor: true },
  ];

  const buttons = [TableButtonType.add, TableButtonType.delete];

  return (
    <PageHeaderWrapper
    title="Hello World"
    header={
      <Button color={ButtonColor.primary} onClick={() => tableDS.submit()}>
        提交
      </Button>
    }
    >
      <Table
        queryFieldsLimit={3}
        dataSet={tableDS}
        columns={columns}
        buttons={buttons}
      />
      <pre>当前在第 {currentPage} 页</pre>
      <p>{isSelected ? '当前勾选了数据' : '当前没有勾选数据'}</p>
    </PageHeaderWrapper>
  );
};

export default HelloWorldPage;
