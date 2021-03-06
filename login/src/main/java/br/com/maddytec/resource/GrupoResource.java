package br.com.maddytec.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.maddytec.domain.Grupo;
import br.com.maddytec.service.GrupoService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "grupo")
public class GrupoResource {

	@Autowired
	private GrupoService grupoService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Grupo> findById(@PathVariable(name = "id") Long id) {
		Grupo grupo = grupoService.findById(id);
		return ResponseEntity.ok().body(grupo);
	}

	@GetMapping
	public ResponseEntity<List<Grupo>> findAll() {
		List<Grupo> grupos = grupoService.findAll();
		return ResponseEntity.ok(grupos);
	}

}
