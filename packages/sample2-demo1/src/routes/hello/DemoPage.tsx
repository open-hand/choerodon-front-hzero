// @ts-nocheck

import React from 'react';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import { DataSet, Table, Button, SelectBox } from 'choerodon-ui/pro';
import { ButtonColor } from 'choerodon-ui/pro/lib/button/enum';
import { TableButtonType } from 'choerodon-ui/pro/lib/table/enum';
import { Buttons } from 'choerodon-ui/pro/lib/table/Table';
import { ColumnProps } from 'choerodon-ui/pro/lib/table/Column';
import { getCurrentOrganizationId } from 'utils/utils';
import commonConfig from '@common/config/commonConfig';
import {
  useDataSet,
  useDataSetCurrentPage,
  useDataSetIsSelected,
  useDataSetEvent,
} from 'utils/hooks';
import { DataSetSelection, FieldType, FieldIgnore } from 'choerodon-ui/pro/lib/data-set/enum';
import { AxiosRequestConfig } from 'axios';
import { ViewMode } from 'choerodon-ui/pro/lib/radio/enum';
import styles from './style.module.less';

const todoTableDataFactory = () =>
  new DataSet({
    autoQuery: true,
    transport: {
      read: (config: AxiosRequestConfig): AxiosRequestConfig => {
        return {
          ...config,
          url: `${commonConfig.TODO_API}/v1/${getCurrentOrganizationId()}/tasks`,
          method: 'GET',
        };
      },
      submit: ({ data, params }): AxiosRequestConfig => {
        return {
          url: `${commonConfig.TODO_API}/v1/${getCurrentOrganizationId()}/tasks/submit`,
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
        type: 'string' as FieldType,
        // type: FieldType.string,
        required: true,
      },
      {
        name: 'percent',
        label: '进度',
        type: 'number' as FieldType,
        required: false,
        defaultValue: 0,
      },
      {
        name: 'taskNumber',
        label: '任务编号',
        type: 'string' as FieldType,
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
        type: 'object' as FieldType,
        lovCode: 'TODO.USER',
        ignore: 'always' as FieldIgnore,
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
        name: 'state',
        label: '任务状态',
        type: 'string' as FieldType,
        lookupCode: 'TODO.TODO_STATE',
      },
      {
        name: 'taskDescription',
        label: '任务描述',
        type: 'string' as FieldType,
      },
      {
        name: 'state2',
        label: '任务状态',
        type: 'string' as FieldType,
        lookupCode: 'TODO.TODO_STATE',
        multiple: true,
      },
      {
        name: 'state',
        label: '任务状态',
        type: 'string' as FieldType,
        lookupCode: 'TODO.TODO_STATE',
      },

      {
        name: 'taskNumber',
        label: '任务编号',
        type: 'string' as FieldType,
      },
      {
        name: 'employeeNumber',
        label: '员工编号',
        type: 'string' as FieldType,
      },
    ],
  });

const HelloWorldPage: React.FC = () => {
  const tableDS = useDataSet(todoTableDataFactory, HelloWorldPage);
  const currentPage = useDataSetCurrentPage(tableDS);
  const isSelected = useDataSetIsSelected(tableDS);
  useDataSetEvent(tableDS, 'load', () => {
    // tslint:disable-next-line: no-console
    console.log('数据加载完成！');
  });

  const columns: ColumnProps[] = [
    { name: 'taskNumber', width: 320, editor: true },
    { name: 'taskDescription', editor: true },
    { name: 'state', editor: true },
    { name: 'employeeObject', editor: true },
  ];

  const buttons = [TableButtonType.add, 'delete' as Buttons];

  return (
    <PageHeaderWrapper
      header={
        <Button color={'primary' as ButtonColor} onClick={() => tableDS.submit()}>
          提交
        </Button>
      }
      title="Hello World"
    >
      <Table
        queryFieldsLimit={3}
        dataSet={tableDS}
        queryFields={{
          state2: <SelectBox mode={ViewMode.button} />,
        }}
        columns={columns}
        buttons={buttons}
        pagination={{
          showQuickJumper: true,
          // pageSize: 20,
          pageSizeOptions: ['20', '40'],
          // page: 4,
        }}
      />
      <pre>当前在第 {currentPage} 页</pre>
      <p>{isSelected ? '当前勾选了数据' : '当前没有勾选数据'}</p>
      <p>
        css modules 测试: <span className={styles['test-cls']}>{styles['test-cls']}</span>
      </p>
    </PageHeaderWrapper>
  );
};

export default HelloWorldPage;
