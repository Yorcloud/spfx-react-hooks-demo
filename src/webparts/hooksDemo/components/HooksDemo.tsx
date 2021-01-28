import * as React from 'react';
import styles from './HooksDemo.module.scss';
import { IHooksDemoProps } from './IHooksDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HooksDemo extends React.Component<IHooksDemoProps, {}> {
  public render(): React.ReactElement<IHooksDemoProps> {
    return (
      <div className={styles.hooksDemo}>
        <h1>Hi {this.props.context.pageContext.user.displayName}</h1>
      </div>
    );
  }
}
