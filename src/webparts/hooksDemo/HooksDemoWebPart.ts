import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'HooksDemoWebPartStrings';
import HooksDemo from './components/HooksDemo';
import { IHooksDemoProps } from './components/IHooksDemoProps';
import HooksDemoFC from './components/HooksDemoFC';

export interface IHooksDemoWebPartProps {
  description: string;
}

export default class HooksDemoWebPart extends BaseClientSideWebPart<IHooksDemoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHooksDemoProps> = React.createElement(
      HooksDemoFC,
      {
        description: this.properties.description,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
