import React, { Component } from 'react';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import { Dispatch } from 'redux';
import Demo from './Demo';
interface Test1PageProps {
  dispatch: Dispatch<any>;
}
export default class Test1Page extends Component<Test1PageProps> {
  render() {
    return (
      <PageHeaderWrapper title="Hello World">
        <p>Hello Test1</p>
        <div>abc</div>
        <div>
          INSERT_BLOCK_PLACEHOLDER
          <Demo />
        </div>
        <div>INSERT_BLOCK_PLACEHOLDER:foo</div>
        <div>INSERT_BLOCK_PLACEHOLDER:bar</div>
        <div>INSERT_BLOCK_PLACEHOLDER</div>
      </PageHeaderWrapper>
    );
  }
}
