package com.m1well.mapping;

import com.m1well.dto.ProductDto;
import com.m1well.data.ProductEntity;

public class SimpleProductMapper {

    public static ProductDto toDto(ProductEntity entity) {
        return new ProductDto(entity.getId(), entity.getName(), entity.getPrice());
    }

}
