import * as React from 'react';
import styles from './HooksDemo.module.scss';
import { IHooksDemoProps } from './IHooksDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { FunctionComponent, useState, useEffect } from 'react';

const HooksDemoFC: FunctionComponent<IHooksDemoProps> = (props) => {

  const [name,setName] = useState<string>('');

  useEffect(() => {
    setName(props.context.pageContext.user.displayName);
  },[props])

  return (
    <div className={styles.hooksDemo}>
      <h1>FC Hi {name}</h1>
    </div>
  )
}

export default HooksDemoFC;
