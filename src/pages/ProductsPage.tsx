import React from "react";
import { Panel, RichTextView } from "@epam/promo";
import { FlexRow } from "@epam/uui-components";
import css from "./ProductsPage.module.scss";
import { Product } from "@epam/uui-docs";
import { useProductsFetch } from "../hooks/use-products-fetch";

export function ProductsPage() {
  const [products, loading, hasError] = useProductsFetch();

  return (
    <>
      <Panel shadow cx={css.mainPanel} background="white">
        {loading ? (
          <div>Loading...</div>
        ) : hasError ? (
          <div>Error occured.</div>
        ) : (
          products?.map((product: Product) => (
            <FlexRow key={product.ProductID}>
              <RichTextView>
                <h3>{product.Name}</h3>
                <p>{product.ProductNumber}</p>
              </RichTextView>
            </FlexRow>
          ))
        )}
      </Panel>
    </>
  );
}
