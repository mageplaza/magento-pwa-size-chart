import {gql} from '@apollo/client';

export const ADD_SIZE_CHART = gql`
    query productDetail($urlKey: String!) {
    productDetail: products(filter: { url_key: { eq: $urlKey } }) {
        items {
            __typename
            id
            sku
            type_id
            name
            meta_title
            meta_description
            rating_summary
            review_count
                  mp_sizeChart {
              rule_id
              name
              rule_description
              rule_content
              template_styles
              display_type
              enabled
              store_ids
              priority
              attribute_code
              demo_templates
              priority
              updated_at
              created_at
            }
        }
    }
}
`