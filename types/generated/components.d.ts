import type { Struct, Schema } from '@strapi/strapi';

export interface SpotsSpot extends Struct.ComponentSchema {
  collectionName: 'components_spots_spots';
  info: {
    displayName: 'spot';
    icon: 'cursor';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    url: Schema.Attribute.String;
    left: Schema.Attribute.Decimal;
    top: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'spots.spot': SpotsSpot;
    }
  }
}
