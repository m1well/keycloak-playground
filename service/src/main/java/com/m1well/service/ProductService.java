package com.m1well.service;

import com.m1well.dto.ProductDto;
import com.m1well.mapping.SimpleProductMapper;
import com.m1well.repo.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<ProductDto> getAll() {
        return mockProducts();
    }

    private List<ProductDto> mockProducts() {
        return repo.findAll().stream()
                .map(SimpleProductMapper::toDto)
                .collect(Collectors.toList());
    }

}
