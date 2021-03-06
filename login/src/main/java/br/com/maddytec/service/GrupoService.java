package br.com.maddytec.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import br.com.maddytec.domain.Grupo;
import br.com.maddytec.exception.NotFoundException;
import br.com.maddytec.repository.GrupoRepository;

@Service
public class GrupoService {

	@Autowired
	private GrupoRepository grupoRepository;

	public Grupo findById(Long id) {
		Optional<Grupo> optional = grupoRepository.findById(id);
		return optional.orElseThrow(() -> new NotFoundException("Não existe grupo de usuário com id: " + id));
	}

	public List<Grupo> findAll() {
		List<Grupo> grupos = grupoRepository.findAll();
		return grupos;
	}

}
