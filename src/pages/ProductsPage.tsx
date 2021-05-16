import React, { useState } from "react";
import { Panel, RichTextView, Paginator } from "@epam/promo";
import { FlexCell, FlexRow } from "@epam/uui-components";
import css from "./ProductsPage.module.scss";
import { Product } from "@epam/uui-docs";
import { useProductsFetch } from "../hooks/use-products-fetch";

export function ProductsPage() {
  const pageSize = 10;
  const [page, onPageChange] = useState(0);
  const [products, loading, hasError] = useProductsFetch(
    page * pageSize,
    (page + 1) * pageSize
  );

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
      <FlexCell width="100%" cx={css.container}>
        <Paginator
          size="24"
          totalPages={products?.length || 0}
          value={page}
          onValueChange={onPageChange}
        />
      </FlexCell>
    </>
  );
}
