import React, { Component } from 'react';
import { Button } from 'choerodon-ui/pro'
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import { Dispatch } from 'redux';
import { connect } from 'dva';

interface TestPagePageProps {
  dispatch: Dispatch<any>;
}

@connect()
export default class TestPagePage extends Component<TestPagePageProps> {
  render() {
    return (
      <PageHeaderWrapper
        title='TestPagePage'
        header={
          <Button>按钮</Button>
        }
      >
        <div>Hello TestPage</div>
      </PageHeaderWrapper>
    );
  }

}
